const mongoose=require("mongoose");

const connect=mongoose.connect("mongodb://localhost:27017/login-tut");   
connect.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:",err);
});

// create a schema
const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

// collection part
const collection = mongoose.model("Login",loginSchema);
module.exports=collection;
    