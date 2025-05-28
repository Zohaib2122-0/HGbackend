import express from "express";
import { createtreatment, gettreatment } from "../controller/treatmentcontroller.js";

let treatmentroutes=express.Router()
treatmentroutes.route("/createtreatment").post(createtreatment)
treatmentroutes.route("/gettreatment").post(gettreatment)
export default treatmentroutes