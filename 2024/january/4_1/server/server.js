const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017');

const server = http.createServer((req, res) => {

 
    const db = client.db('product');
    const collection = db.collection("product_details");
  
    
    const reqUrl = req.url;
    console.log("reqUrl : ", reqUrl);

    const parsedUrl = url.parse(reqUrl);
  console.log("parsedUrl : ", parsedUrl);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, ('Content-Type', 'text/html'));
    res.end(fs.readFileSync('../client/index.html'));
  }
  
  if (req.method === 'POST' && parsedUrl.pathname === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
        console.log("chunk : ", chunk);
        console.log("to string : ", chunk.toString());
        body = body + chunk.toString();
  
      });

      req.on('end', async() => {
        console.log("body : ", body);
        const formData = querystring.parse(body);
        console.log("formData : ", formData);

        await collection.insertOne(formData)});

        res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("form data submitted successfully");
  }});


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
        console.log(`server running at http://localhost:3001`);
      })
    });
  }
   
  connect();

// const itemid = document.getElementById('UrunID');
// const itemname = document.getElementById('UrunAdi');
// const quantity = document.getElementById('UrunMiktar');
// const category = document.getElementById('Kategori');
// const pushbutton = document.getElementById('ekleButton');
// var items = [];

// class item {
//     id;
//     itemname;
//     quantity;
//     category;
// }

// pushbutton.addEventListener('click' , function() {
//     var dynamicitem = new item();
//     dynamicitem.id = itemid.value;
//     dynamicitem.itemname = itemname.value;
//     dynamicitem.quantity = quantity.value;
//     dynamicitem.category = category.value;
//     items.push(dynamicitem);
//     localStorage.setItem('items' , JSON.stringify(items));
//     console.log(items[0].itemname);
//     itemid.textContent = '';
//     itemname.textContent = '';
//     quantity.textContent = '';
//     category.textContent = '';

// })