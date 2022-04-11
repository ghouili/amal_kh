const express = require('express')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

const PORT = 5000;

const server = express()
server.use(bodyparser.json());

server.post('/user/login', (req, res) =>{
    console.log(req.body);
    return res.status(200).json({message: "success", data: req.body});
})

mongoose.connect("mongodb+srv://admin:admin@projetisgb.zdzuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => server.listen( PORT, () => console.log(`server is runnin on port ${PORT}`)))
.catch(error => console.log(error));