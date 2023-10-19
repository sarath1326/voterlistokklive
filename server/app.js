

const express= require("express");
const app=express();
const cors=require("cors");
const router=require("./Router/Router");
const DB=require("./Model/DBconnecting");


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());


DB.DBConnecting();

app.use("/",router);










app.listen(3001,()=>{

    console.log("server started")
})