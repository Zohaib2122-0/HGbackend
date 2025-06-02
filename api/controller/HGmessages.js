

import { messagesshm } from "../model/HGmessages.js"

export let sendmessages = async (req, res) => {
    try {

        let detail = req.body
        let { name, lastName, email, no, messages } = detail
        let message = await messagesshm.create({
            name, lastName, email, no, messages
        })
        return res.status(200).json({ message: "message added sucessfully", message })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export let getmesages = async (req, res) => {
    try {

        let messages = await messagesshm.find()
        if (!messages) {
            return res.status(400).json({ message: "error in fetching messages" })
        }

        return res.status(200).json({ message: "get messages sucessfully", messages })
    } catch (error) {
        return res.status(400).json({ message: error.message })

    }
}

export const deletemessage = async (req, res) => {
    try {
        let { id } = req.params
        let deletedmessage = await messagesshm.findByIdAndDelete(id)

        if (!deletedmessage) {
            return res.status(400).json({ message: "Mesage not found" })
        }
        return res.status(200).json({ message: "message delete sucessfully" })


    } catch (error) {
        console.log(error)
    }
}