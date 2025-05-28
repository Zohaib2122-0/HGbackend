import mongoose from "mongoose";

let patientschema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    age:{type:Number},
    serialno:{type:Number},
    disease:{type:String},
    // role:{type:String , enum:["admin", "user"], default:"user"}
})
let patientshm= mongoose.model("patient model",patientschema)
export default patientshm