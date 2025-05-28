import appointmentshm from "../model/appointmentmodel.js"
import express from "express"
import { app } from "./patientcontroller.js"
app.use(express.json())

export let createappointment = async (req, res) => {
    try {

        let detail = req.body
        let { name, age, gender, phone, date, doctor, status } = detail
        let newappointmentshm = await appointmentshm.create({
            name, age, gender, phone, date, doctor, status

        })
        return res.status(200).json({ message: "appointment created sucessfully", newappointmentshm })
    } catch (error) {
        console.log(error)
    }

}

export let getappointment = async (req, res) => {
    try {
        let getappointment = await appointmentshm.find({ status: "Pending" })
        if (!getappointment) {
            return res.status(400).json({ message: "Not found" })
        }
        return res.status(200).json({ message: "get appointment sucessfully", getappointment })
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

export let approveddata = async (req, res) => {
    try {
        let Approveddata = await appointmentshm.find({ status: "Approved" })
        if (!Approveddata) {
            return res.status(400).json({ message: "Not found" })
        }

        return res.status(200).json({ message: "Fetch data sucessfully", Approveddata })
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

export let approveappointment = async (req, res) => {
    try {
        let { id } = req.params

        let approvedappointment = await appointmentshm.findByIdAndUpdate(id, { status: "Approved" }, { new: true })

        if (!approvedappointment) {
            return res.status(400).json({ message: "Approved appointment not found" })
        }

        return res.status(200).json({ message: "Approved appointment sucessfully", approvedappointment })
    } catch (error) {
        return res.status(500).json({ message: "server error" })
    }
}

export let rejectppointment = async (req, res) => {
    try {
        let { id } = req.params
        let rejectedappointment = await appointmentshm.findByIdAndDelete(id)
        if (!rejectedappointment) {
            return res.status(400).json({ message: "Datanot found" })
        }

        return res.status(200).json({ message: "Appointment reject sucessfully" })
    } catch (error) {
        return res.status(500).json({ message: "server error" })

    }
}