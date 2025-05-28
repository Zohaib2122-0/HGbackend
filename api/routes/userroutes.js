import express from "express";
import { loginuser, logout, registeruser } from "../controller/Usercontroller.js";

export let userroutes = express.Router()
userroutes.route("/registeruser").post(registeruser)
userroutes.route("/login").post(loginuser)
userroutes.route("/logout").post(logout)
