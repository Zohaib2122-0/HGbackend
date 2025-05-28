import mongoose from "mongoose";

let billingschema = new mongoose.Schema({
    patientid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patient model",
        required: true

    },
    doctorid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctormodel l-s",
        required: true

    },
    treatment: [{
        treatmentid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "treatmentmodel",
            required: true
        },

        cost: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now

        }
    }],

    consultationfees: {
        type: Number,
        ref: "Doctormodel l-s",
        required: true
    },
   
    totalbill: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        // enum: ["pending, paid"],
        enum: ["pending", "paid"], 
        default: "pending"
    },
    billingdate: {
        type: Date,
        default: Date.now
    }


})


let billingshm = mongoose.model("billingschemamodel", billingschema)
export default billingshm