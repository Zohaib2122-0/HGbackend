
import mongoose from "mongoose";

let doctorschema= new mongoose.Schema({
    name:{type:String},
    specialization:{type:String},
    consultationFees:{type:Number},
    email:{type:String,},
    status:{type:Boolean,default:false},
    role:{type:String, enu:["user", "doctor"], default:"user"}
})
let doctorshm= mongoose.model("Doctormodel l-s", doctorschema)
export default doctorshm