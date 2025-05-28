import mongoose from "mongoose";

import { config } from "dotenv";
config()
export let dbarea=()=>{
    mongoose.connection.on("connected", ()=>{
        console.log("Db connected with HM")
    })
    mongoose.connection.on("error", ()=>{
        console.log(" failed while Db connection with HM")
    })
mongoose.connect(process.env.dbconnection)
}
