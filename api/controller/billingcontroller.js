
import billingshm from "../model/billingmodel.js";
import { app } from "./patientcontroller.js";
import express from "express";
app.use(express.json())





export async function createBillingRecord(req, res) {
    try {
        const billingData = req.body;

        // Calculate the total bill
        const totalBill = calculateTotalBill(billingData);

        // Create a new billing instance
        const newBilling = new billingshm({
            patientid: billingData.patientid,
            doctorid: billingData.doctorid,
            treatment: billingData.treatment,
            consultationfees: billingData.consultationfees,
            totalbill: totalBill,
            status: billingData.status || 'pending',
            billingdate: billingData.billingdate || Date.now()
        });

        // Save the billing record to the database
        const savedBilling = await newBilling.save();

        // Send response back to the client
        res.status(201).json({
            message: 'Billing record created successfully',
            billing: savedBilling
        });
    } catch (error) {
        console.error('Error creating billing record:', error);
        res.status(500).json({
            message: 'Error creating billing record',
            error: error.message
        });
    }
}


// Billing calculation function
export function calculateTotalBill(billingData) {
    const { consultationfees, treatment } = billingData;

    // Calculate total treatment cost
    let totalTreatmentCost = 0;
    if (treatment && treatment.length > 0) {
        totalTreatmentCost = treatment.reduce((accumulator, currentTreatment) => {
            return accumulator + currentTreatment.cost;
        }, 0);
    }

    // Calculate total bill
    const totalBill = consultationfees + totalTreatmentCost;

    return totalBill;
}


export async function generateBill(req, res) {
    try {
        const { patientid } = req.params; // Patient ID ko params se lein

        // Billing record ko fetch karein
        const billingRecord = await billingshm.findOne({ patientid }).populate('doctorid treatment.treatmentid');

        if (!billingRecord) {
            return res.status(404).json({ message: 'Billing record not found' });
        }

        // Total amount calculate karein
        const totalAmount = billingRecord.treatment.reduce((acc, treatment) => {
            return acc + treatment.cost;
        }, 0) + billingRecord.consultationfees;

        // Bill document create karein
        const billDocument = {
            patientId: billingRecord.patientid,
            doctorId: billingRecord.doctorid,
            consultationFees: billingRecord.consultationfees,
            treatmentDetails: billingRecord.treatment,
            totalAmount,
            billingDate: billingRecord.billingdate,
            status: billingRecord.status,
        };

        // (Optional) Bill ko database mein save karein ya print karein
        // await someBillModel.create(billDocument); // Uncomment if saving is needed

        // Response bhejein
        res.status(200).json({
            message: 'Bill generated successfully',
            bill: billDocument
        });
    } catch (error) {
        console.error('Error generating bill:', error);
        res.status(500).json({
            message: 'Error generating bill',
            error: error.message
        });
    }
}
