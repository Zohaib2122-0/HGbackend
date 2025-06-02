

import mongoose from "mongoose";

let Messages = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    no: { type: Number, required: true },
    messages: { type: String, required: true },
}, { timestamps :true})
export let messagesshm = mongoose.model("HG Messages", Messages)
