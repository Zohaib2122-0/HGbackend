
import mongoose from "mongoose";
let messageschema= new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    // address:{type:String, required:true},
    subject:{type:String, required:true},
    message:{type:String, required:true}
})
let messagesshm= mongoose.model("messagemodel", messageschema)
export default messagesshm