

import mongoose from "mongoose";

let project = new mongoose.Schema({
    category: { type: String },
    title: { type: String },
    project: [String]
}, { timestamps: true })
export let projectshm = mongoose.model("HG Projects", project)
