import express from "express";
import { getmessages, sendmessage } from "../controller/messagescontroller.js";

let messagesroutes=express.Router()
messagesroutes.route("/sendmessage").post(sendmessage)
messagesroutes.route("/getmessages").get(getmessages)
export default messagesroutes