import express from "express";
import {  createBillingRecord, generateBill } from "../controller/billingcontroller.js";
// import { billingcontroller } from "../controller/billingcontroller.js";
 let billingroutes=express.Router()
 billingroutes.route("/createBillingRecord").post(createBillingRecord)
 billingroutes.route("/generatebill/:patientid").get(generateBill)


 export default billingroutes