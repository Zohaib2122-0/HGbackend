
import express from "express"
import patientshm from "../model/patientmodel.js"
import { config } from "dotenv"
config();
export let app = express()
app.use(express.json())


// let generatetoken = async (patientid) => {

//     let acesstoken = jwt.sign({ patientid }, process.env.secretkey1, { expiresIn: "30m" })

//     let refreshtoken = jwt.sign({ patientid }, process.env.secretkey2, { expiresIn: "7d" })


//     return { acesstoken, refreshtoken }
// }

// let generatecookies = (res, acesstoken, refreshtoken) => {
//     res.cookie("acesstoken", acesstoken, {
//         httponly: true,
//         secure: true,
//         maxAge: 30 * 60

//     })
//     res.cookie("refreshtoken", refreshtoken, {
//         httponly: true,
//         secure: true,
//         maxAge: 7 * 24 * 60 * 60
//     })
// }


export let registerpatient = async (req, res) => {
    try {

        let detail = req.body
        const { name, email, password, age, serialno, disease } = detail

        let newpatientshm = await patientshm.create({
            name,
            email,
            age,
            serialno,
            disease,
            password
        })
        

        // const { acesstoken, refreshtoken } = generatetoken(newpatientshm._id)
        //    console.log(newpatientshm._id)
        // generatecookies(res, acesstoken, refreshtoken)
        return res.status(200).json({ message: "user register sucessfully", newpatientshm })
    } catch (error) {
        return res.status(400).json({ message: error.message })

    }

}


export let loginpatient = async (req, res) => {
    try {

        let detail = req.body
        const { email, password } = detail
        let user1 = await patientshm.findOne({ email })
        if (!user1) {
            return res.status(400).json({ message: "please login first your email not found" })
        }
        let user2 = await bcrypt.compare(password, user1.password)
        if (!user2) {
            return res.status(400).json({ message: "invalid password" })
        }
        return res.status(200).json({
            message: "login sucessfully"
        })

    } catch (error) {
        return res.status(400).json({ message: error.message })

    }

}

export let addpatient = async (req, res) => {
    try {


        let detail = req.body
        let { name, email, password, age, serialno, disease } = detail


        let newhm = await patientshm.create({
            name,
            email,
            password,
            age,
            serialno,
            disease,
            // role

        })
        return res.status(200).json({ message: "patient added sucessfully", newhm })
        // res.json(req.body)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export let getpatient = async (req, res) => {
    try {
        let getpatient = await patientshm.find()
        if (!getpatient) {
            return res.status(400).json({ message: "please get a ticket first" })
        }
        return res.status(200).json({ message: "get patient ticken sucessfully", getpatient })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

export let updatepatient = (req, res) => {
    try {
        let newpatient = req.body
        let { id } = req.params
        let updatepatient = patientshm.findByIdAndUpdate(id, newpatient)
        if (!updatepatient) {
            return res.status(400).json({ message: " update patient error" })
        }
        return res.status(200).json({ message: " update patient sucessfully" })
    } catch (error) {
        return res.status(400).json({ message: error.message })

    }

}

export let dischargingpatient = (req, res) => {
    try {

        let { id } = req.params

        let dischargingpatient = patientshm.findByIdAndDelete(id)
        if (!dischargingpatient) {
            return res.status(400).json({ message: " error while discharging patient" })
        }
        return res.status(200).json({ message: " discharge patient sucessfully" })
    } catch (error) {
        return res.status(400).json({ message: error.message })

    }

}