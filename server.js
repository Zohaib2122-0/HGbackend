
import { dbarea } from "./config/dbarea.js";
import { app } from "./controller/patientcontroller.js";
import billingroutes from "./routes/billingroutes.js";
import cors from "cors"

import doctorroutes from "./routes/doctoreroutes.js";
import patientroutes from "./routes/patientroutes.js";
import treatmentroutes from "./routes/treatmentroutes.js";
import cookieParser from "cookie-parser";
import messagesroutes from "./routes/messagesroutes.js";
import { userroutes } from "./routes/userroutes.js";
let hm = () => {
    app.use(cookieParser())
    app.use(cors({

        origin: 'http://localhost:5173',
        credentials: true
    }

    ))
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