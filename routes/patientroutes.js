import express from "express";
import { addpatient, dischargingpatient, getpatient, loginpatient, registerpatient, updatepatient } from "../controller/patientcontroller.js";
import { createappointment, getappointment } from "../controller/appointmentcontroller.js";
// import { loginuser, registeruser } from "../controller/Usercontroller.js";
// import { createappointment, getappointment } from "../controller/appointmentcontroller.js";
// import { protectedroutes } from "../midleware/protectedroutes.js";


let patientroutes=express.Router()
patientroutes.route("/addpatient").post(addpatient)
patientroutes.route("/getpatient").get(getpatient)
patientroutes.route("/updatepatient").put(updatepatient)
patientroutes.route("/dischargingpatient").delete(dischargingpatient)
patientroutes.route("/register").post(registerpatient)
patientroutes.route("/loginpatient").post(loginpatient)







patientroutes.route("/createappointment").post(createappointment)
patientroutes.route("/getappointment").get(getappointment)

export default patientroutes