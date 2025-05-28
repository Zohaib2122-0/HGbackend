
import mongoose from "mongoose";

let appointmentshema = new mongoose.Schema({
   name: { type: String, required: true },
   age: { type: Number, required: true },
   gender: { type: String, required: true },
   phone: { type: Number, required: true },
   date: { type: Date, default: Date.now },
   doctor: { type: String, required: true },

   status: { type: String, enum: ["Pending", "Approved"], default: "Pending" }
}, { timestamps: true })



let appointmentshm = mongoose.model("appointment model", appointmentshema)
export default appointmentshm

