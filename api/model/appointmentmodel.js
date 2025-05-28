
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






// const appointmentshema = new mongoose.Schema({
//       patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
//       doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
//       date: Date,
//       status: { type: String, enum: ['Pending', 'Completed', 'Canceled'], default: 'Pending' },
//     });
let appointmentshm = mongoose.model("appointment model", appointmentshema)
export default appointmentshm

