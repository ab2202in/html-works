const express =require('express');
const app =express();
const port = 5000;

app.use('/',express.static(__dirname+'/client'));

app.get('/test',(req,res)=>{
    res.status(200).send("Success");
});

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
});