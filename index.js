const express =require('express');
const app= express();
const dotenv= require('dotenv');
const mongoose =require('mongoose');
const routeUrls= require('./routes/routes');
const cors=require("cors");



const db="mongodb://onboard:onboard@onboard-shard-00-00.n4f0d.mongodb.net:27017,onboard-shard-00-01.n4f0d.mongodb.net:27017,onboard-shard-00-02.n4f0d.mongodb.net:27017/test?replicaSet=atlas-10kwwl-shard-0&ssl=true&authSource=admin";
dotenv.config()// to give our mongodb credentials in a secure way
mongoose.connect(db,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
  }).then(()=>console.log('Connected to MongoDb'))
  .catch((err)=>console.log(err));



app.use(express.json())//bodyparser
app.use(cors())
app.use('',routeUrls);
const port = process.env.PORT || 8080
app.listen(port,()=>{console.log("server is running")});