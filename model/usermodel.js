import mongoose from "mongoose";

let userschema= mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, enum:["user", "admin"],default:"user"}
    
})

let usershm=new mongoose.model("user model", userschema)
export default usershm