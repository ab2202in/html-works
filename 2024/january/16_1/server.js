const express = require('express');
const app = express();
let { MongoClient } = require('mongodb')
let dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT;

const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('todo');
const collection = db.collection("users");

app.use('/', express.static(__dirname + '/client'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.get('/test', (req, res) => {
    res.status(200).send("Success");
});

app.post('/submit',async (req,res)=>{
    console.log("reached here");
    console.log("req body : ",req.body);

    await collection.insertOne(req.body)
    .then((message)=>{
      console.log("document insertion successull",message);
      res.status(201).send("Success");
    })
    .catch((errors)=>{
      console.log("document insertion failed",errors);
      res.status(400).send("Failed");
    })
})


async function connect() {
    await client.connect()
      .then((message) => {
        console.log("database connection established");
      })
      .catch((error) => {
        console.log("database is not connected");
        console.log("database error : ", error.message ? error.message : error);
      })
      .finally(() => {
        app.listen(port, () => {
          console.log(`server running at http://localhost:5000`);
        })
      });
  }
  
  connect();