import express from "express";
import { adddoctor, getdoctor, getregistereddoctor, registerdoctor, removedoctor, updatedoctorinfo } from "../controller/doctorcontroller.js";
import { approveappointment, approveddata, rejectppointment } from "../controller/appointmentcontroller.js";
let doctorroutes=express.Router()
doctorroutes.route("/adddoctor").post(adddoctor)
doctorroutes.route("/getdoctor").get(getdoctor)
doctorroutes.route("/updatedoctorinfo").put(updatedoctorinfo)
doctorroutes.route("/removedoctor/:id").delete(removedoctor)

doctorroutes.route("/register/doctor/:id").put(registerdoctor)
doctorroutes.route("/registered/doctor").get(getregistereddoctor)



doctorroutes.route("/approve/appointment/:id").put(approveappointment)
doctorroutes.route("/reject/appointment/:id").delete(rejectppointment)
doctorroutes.route("/approved/appointment").get(approveddata)


export default doctorroutes