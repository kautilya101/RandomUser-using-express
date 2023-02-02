import { Request, Response } from "express";

let cors = require('cors')
const express = require('express');


const bodyparser = require("body-parser");


const app = express();
app.use(cors())
var port = 5000;
const url = 'https://randomuser.me/api/?page=1&results=20&seed=foobar';

fetch(url).then(res => res.json());


app.get("/", async (req : Request,res: Response) => {
    let response = await fetch(`https://randomuser.me/api/?page=${req.query.page}&results=${req.query.results}&seed=foobar`);
    response = await response.json();
    res.status(200).send(response);
})



app.listen(port, (req : Request,res : Response) =>{
    console.log(`working on port : ${port}`);
})





