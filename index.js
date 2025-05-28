
import { dbarea } from "./config/dbarea.js";
import cors from "cors"

import { app } from "./api/controller/patientcontroller.js";
import billingroutes from "./api/routes/billingroutes.js";
import patientroutes from "./api/routes/patientroutes.js";
import { userroutes } from "./api/routes/userroutes.js";
import doctorroutes from "./api/routes/doctoreroutes.js";
import treatmentroutes from "./api/routes/treatmentroutes.js";
import messagesroutes from "./api/routes/messagesroutes.js";
import cookieParser from "cookie-parser";
let hm = () => {
    app.use(cookieParser())
    app.use(cors({

        origin: 'http://localhost:5173',
        credentials: true
    }
    ))
    app.options("*", cors());
    let port = 3000

    app.listen(port, () => {
        app.use("/api", patientroutes)
        app.use("/api", billingroutes)
        app.use("/api", userroutes)
        app.use("/api", doctorroutes)
        app.use("/api", treatmentroutes)
        app.use("/api", messagesroutes)
        dbarea()
        console.log(`hm server started sucessfully on port${port}`)
    })

}
hm()