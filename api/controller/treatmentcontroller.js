import treatmentshm from "../model/treatmentmodel.js";
import { app } from "./patientcontroller.js";
import express from "express";

app.use(express.json())

export let createtreatment=(req, res)=>{
    try {
        
        let detail=req.body;
        const{name, cost, duration}=detail
        let newtreatmentshm=treatmentshm.create({
            name,
            cost,
            duration
        })
       
        return res.status(200).json({message:"treatment okokok",detail})
    } catch (error) {
        
        return res.status(400).json({message:error.message})
    }
}

export let gettreatment=async(req, res)=>{
    try {
        let gettreatment=await treatmentshm.find()
        if(!gettreatment){
            return res.status(400).json({message:"error while fetching treatment data"})
        }
       
        return res.status(200).json({message:"get it treatmnent",gettreatment})
    } catch (error) {
        return res.status(400).json({message:error.message})

    }
} 