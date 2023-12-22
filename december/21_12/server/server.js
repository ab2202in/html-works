const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

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
    req.on('end', () => {
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
      `)
    });

    //send a response messsage
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("form data submitted successfully");
  }

});
  server.listen(port, () => {
    console.log(`server running at http://localhost:3000`);
  });