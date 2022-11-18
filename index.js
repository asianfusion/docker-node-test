const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    //res.send({ status: true, message: process.env.MESSAGE})
    res.send({ status: true, message: "Hello world"})
})


app.listen(4567,()=>{
    console.log('app listening in',4567);
})