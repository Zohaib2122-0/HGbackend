import express from "express";
// import { createBillingRecord, generateBill } from "../api/controller/billingcontroller.js";
import { createBillingRecord ,generateBill} from "../controller/billingcontroller.js";
let billingroutes = express.Router()
billingroutes.route("/createBillingRecord").post(createBillingRecord)
billingroutes.route("/generatebill/:patientid").get(generateBill)


export default billingroutes