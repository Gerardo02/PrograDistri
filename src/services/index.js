import express from "express";
import bodyParser from "body-parser";

import BlockChain from "../blockchain/blockchain.js";

const { HTTP_PORT = 3000} = process.env;

const app = express();
const blockchain = new BlockChain();

app.use(bodyParser.json());

app.get('/blocks',  (req, res) => {
    res.json(blockchain.blocks);
});

app.listen(HTTP_PORT, () =>{
    console.log(`Service HTTP: ${HTTP_PORT} listening...`);
});