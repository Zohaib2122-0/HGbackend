


import doctorshm from "../model/doctormodel.js";

import { config } from "dotenv";
config()



// let generatetoken=async(userid)=>{
//     console.log(userid)
// let acesstoken= jwt.sign({userid},process.env.secretkey1,{expiresIn:"30m"} )
// console.log(process.env.secretkey1)
// let refreshtoken=jwt.sign({userid}, process.env.secretkey2,{expiresIn:"7d"})
// console.log(process.env.secretkey2)


// return { acesstoken, refreshtoken}
// }

// let generatecookie=(res, acesstoken, refreshtoken)=>{
// res.cookie("acesstoken", acesstoken,{
//     httponly:true,
//     secure:true,
//    maxAge:30*60
// })
// res.cookie("refreshtoken", refreshtoken,{
//     httponly:true,
//     secure:true,
//    maxAge:7*24*60*60
// })
// }

// export let register=async(req, res)=>{
//     try {
        
//         let detail =req.body
//         let {email, password,name,consultationfees, specialization}=detail
//         let hasspassword=await bcrypt.hash(password, 10)
//         let newdoctorshm= doctorshm.create({
//             name,
//             email,
//             specialization,
//             consultationfees,
//             password :hasspassword
//         })
        
        
//         const{acesstoken, refreshtoken}=generatetoken((await newdoctorshm)._id)
//         generatecookie(res, acesstoken, refreshtoken)
//         return res.status(200).json({message:"user register sucessfully",detail})
//     } catch (error) {
//         return res.status(400).json({message:error.message})
        
//     }
// }

// export let login=async (req,res)=>{
//     try {
//         let detail=req.body
//         let {email, password}=detail

//         let userone=await doctorshm.findOne({email})
//   if(!userone){
//             return res.status(400).json({message:"email cannot found please register first"})

//         }
//         let usertwo=await bcrypt.compare(password, userone.password)
     
//         if(!usertwo){
// return res.status(400).json({
//     message:"error while comparing credentials please login first"
// })
// }
// return res.status(200).json({
//     message:"Login sucessfully",detail
// })

// } catch (error) {
//         return res.status(200).json({
//             message:error.message
//         })
//     }
// }


export let adddoctor=async (req, res)=>{
    try {
        
        let detail=req.body
        let {name, specialization, consultationFees,email,status,role}=detail
        let newdoctorsch=await doctorshm.create({
            name,
            specialization,
            consultationFees,
            email,
            status,
            role
        })
        return res.status(200).json({message:"Doctor added sucessfully",newdoctorsch})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}
export let getdoctor=async (req, res)=>{
    try {
        
        let getdoctor=await doctorshm.find({status:false})
        if (!getdoctor) {
            return res.status(400).json({message:"error in getting user"})
        }
        
        return res.status(200).json({message:"Doctor detail",getdoctor})
    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }
}

export let getregistereddoctor=async (req, res)=>{
    try {
        
        let doctor=await doctorshm.find({status:true,role:"doctor"})
        if (!doctor) {
            return res.status(400).json({message:"error in getting user"})
        }
        
        return res.status(200).json({message:"Doctors detail",doctor})
    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }
}

export let registerdoctor=async(req,res)=>{
    let {id}=req.params
    let registereddoctor=await doctorshm.findByIdAndUpdate(id,{status:true, role:"doctor"}, {new:true})
    if(!registereddoctor){
        return res.status(400).json({message:"Not found error "})
    }
    
    return res.status(200).json({message:"doctor register sucessfully"})
}

export let updatedoctorinfo=async (req, res)=>{
    try {
        let newdoctor=req.body
        let {id}=req.params
        let  updatedoctorinfo=await doctorshm.findByIdAndUpdate(id,newdoctor)
        if (!updatedoctorinfo) {
            return res.status(400).json({message:"error in updating doctor info"})
        }
        return res.status(200).json({message:"update doctor info sucessfully",updatedoctorinfo})
    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }
    
}
export let removedoctor=async (req, res)=>{
    try {
        
        let {id}=req.params
        let removedoctor=await doctorshm.findByIdAndDelete(id)
        
        if (!removedoctor) {
            return res.status(400).json({message:"error in removing doctor "})
        }
        return res.status(200).json({message:"remove doctor"})
    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }
    }


    