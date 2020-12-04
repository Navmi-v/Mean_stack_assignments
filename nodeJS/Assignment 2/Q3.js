const express = require('express');
const port = process.argv[2];

const app = express();

app.get('/home',(req,res)=>{
    res.send("Hello all!");
});

app.listen(port);