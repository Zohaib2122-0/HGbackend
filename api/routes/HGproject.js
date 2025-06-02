

import express from "express";
import { deleteproject, getproject, sendproject } from "../controller/HGproject.js";
import { processFileUpload } from "../midleware/multer.js";
// import { processFileUpload } from "../midleware/multer";

export let HGprojectroutes = express.Router()
HGprojectroutes.route("/project/send").post(processFileUpload, sendproject)
HGprojectroutes.route("/project/display").get(getproject)
HGprojectroutes.route("/project/delete/:id").delete(deleteproject)


