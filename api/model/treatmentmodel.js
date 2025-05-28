import mongoose from "mongoose";

let treatmentschema=new mongoose.Schema({
    name:{type:String, required:true},
    cost:{type:Number, required:true},
    duration:{type:String, required:true},


})
let treatmentshm= mongoose.model("treatmentmodel", treatmentschema)
export default treatmentshm