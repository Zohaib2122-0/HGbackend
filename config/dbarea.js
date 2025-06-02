import mongoose from "mongoose";

import { config } from "dotenv";
config()
export let dbarea=()=>{
    mongoose.connection.on("connected", ()=>{
        console.log("Db connected ")
    })
    mongoose.connection.on("error", ()=>{
        console.log(" failed while Db connection ")
    })
mongoose.connect(process.env.dbconnection)
}
