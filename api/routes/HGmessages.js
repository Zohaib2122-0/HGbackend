

import express from "express";
import { sendmessages ,deletemessage, getmesages} from "../controller/HGmessages.js";

export let HGmessagesroutes = express.Router()
HGmessagesroutes.route("/messages/send").post(sendmessages)
HGmessagesroutes.route("/messages/display").get(getmesages)
HGmessagesroutes.route("/messages/delete/:id").delete(deletemessage)


