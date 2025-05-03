// env settup
import 'dotenv/config';
import express from "express";
import connectDB from './Src/db/connection.js';


const server = express();
const port = 8000;
server.get("/", (req,res)=>{
      res.send("server working fine we cn move on");
})
server.listen(port,(req,res)=>{
     connectDB()
     console.log(`server is listning on port number ${port}`)
})