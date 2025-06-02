


import { dbarea } from "./config/dbarea.js";
import cors from "cors"
import express from "express";
import cookieParser from "cookie-parser";
import { HGprojectroutes } from "./api/routes/HGproject.js";
import { HGmessagesroutes } from "./api/routes/HGmessages.js";

// Initialize express app
const app = express();
app.use(express.json())
app.use(cors({
    // origin: 'https://faisal-hm-frontend.vercel.app',

origin: ["http://localhost:5173", "https://hammadportfolio-ochre.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true

}));
app.options("*", cors());

app.use("/api", HGprojectroutes);
app.use("/api", HGmessagesroutes);


dbarea();
let port=3000
app.listen(port,()=>{
    console.log(`server started${port}`)
})
export default app;
