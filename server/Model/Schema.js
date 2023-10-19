


const mongoose =require("mongoose")




   const userSchema= new mongoose.Schema({

      name:String,
      housename:String,
      age:String,
      voterid:String
      
      
      });



     
       module.exports.userModel=mongoose.model("thamanikara128",userSchema) ; 


