const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const {MongoClient} = require('mongodb')
const {error} = require ('console');


const client =new MongoClient('mongodb://127.0.0.1:27017');


const server = http.createServer(async (req, res) => {

  //access the database and collection 
  const db = client.db('ums');
  const collection = db.collection("users");

  //get the req url
  const reqUrl = req.url;
  console.log("reqUrl : ", reqUrl);

  //parse the req url
  const parsedUrl = url.parse(reqUrl);
  console.log("parsedUrl : ", parsedUrl);

  //if url path is '/' server html
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, ('Content-Type', 'text/html'));
    res.end(fs.readFileSync('../client/index.html'));
  }else if (parsedUrl.pathname === '/add_user.html') {
    res.writeHead(200, ('Content-Type', 'text/html'));
    res.end(fs.readFileSync('../client/add_user.html'));
  }else if (parsedUrl.pathname === '/get_user.html') {
    res.writeHead(200, ('Content-Type', 'text/html'));
    res.end(fs.readFileSync('../client/get_user.html'));
  }else if (parsedUrl.pathname === '/style.css') {
    res.writeHead(200, ('Content-Type', 'text/css'));
    res.end(fs.readFileSync('../client/style.css'));
  }else if (parsedUrl.pathname === '/script.js') {
    res.writeHead(200, ('Content-Type', 'text/javascript'));
    res.end(fs.readFileSync('../client/script.js'));
  }

  //handle form submission on post request to submit
  if (req.method === 'POST' && parsedUrl.pathname === '/submit') {
    let body = '';


    //collect data as it come in chunks
    req.on('data', (chunk) => {
      console.log("chunk : ", chunk);
      console.log("to string : ", chunk.toString());
      body = body + chunk.toString();

    });

    //processs the form data on the end
    req.on('end', async() => {
      console.log("body : ", body);
      const formData = querystring.parse(body);
      console.log("formData : ", formData);

      //do something with the submitted data
      console.log(`
        name : ${formData.fname},
        lname : ${formData.lname},
        uname : ${formData.uname},
        email : ${formData.eMail},
        pword : ${formData.pWord},
        age : ${formData.age},
        address : ${formData.place},
        phone : ${formData.phn}
      `);

      //save to database
      //insert data into collection
      await collection.insertOne(formData)
      .then((message)=>{
        console.log("document insertion successful");
      })
      .catch((error)=>{
        console.log("database insertion error : ",error.message?error.message:error);
      })
     
    });

    //send a response messsage
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("form data submitted successfully");
  }

  if (req.method === 'GET' && parsedUrl.pathname === '/getData') {
    const formData = collection.find();
    console.log("formData : ",formData);

    const formDataArr = await formData.toArray();
    console.log("formDataArr : ",formDataArr);

    let jsonFormData=JSON.stringify(formDataArr);
    console.log("jsonFormData : ",jsonFormData);

    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(jsonFormData);
  }

});

// let f_name =/[a-z]/;
// const name = fname.match(f_name);

async function connect(){
  await client.connect() 
  .then((message)=>{
    console.log("database connection established");
  })
  .catch((error)=>{
    console.log("database is not connected");
    console.log("database error : ", error.message?error.message:error);
  })
  .finally(()=>{
    server.listen(port, () => {
      console.log(`server running at http://localhost:3000`);
    })
  });
}
 
connect();