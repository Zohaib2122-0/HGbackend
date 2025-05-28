
// // import jsonwebtoken from "jsonwebtoken"
// import jwt from "jsonwebtoken"
// import patientshm from "../model/patientmodel.js"
// import dotenv from "dotenv"
// dotenv.config()
// export let protectedroutes=async (req, res ,next)=>{
//     try {
        
//         let refreshtoken=req.cookies.refreshtoken
        
//         console.log("1")
//         console.log(refreshtoken)
//         console.log("1")
//         if(!refreshtoken){
//             return res.status(400).json({message:"please login first for generation of refresh token"})
//         }
//         console.log("1")


//         let user1 = jwt.verify(refreshtoken, process.env.secretkey2)
//         console.log(refreshtoken)
//         console.log(process.env.refreshtoken)
//         console.log("4")
//         console.log("5")
//         if(!user1){
//             return res.status(400).json({message:"refreshtoken and secretket not match"})
            
//         }
//         console.log("6")
// let user2=await patientshm.findById(user1.patientid)
// next()
// req.patient=user1


// } catch (error) {
    //         return res.status(200).json({message:error.message})
    
    //     }
    // }
    // import jsonwebtoken from "jsonwebtoken"
// import jwt from "jsonwebtoken"
// // import dotenv from "dotenv"
// import patientshm from "../model/patientmodel.js"
// import { config } from "dotenv"
// config();
// // dotenv.config()
//     export  let  protectedroutes=async (req, res, next)=>{
//         try {
            
//             let refreshtoken=req.cookies.refreshtoken
            
            
//             if(!refreshtoken){
//                 return res.status(400).json({message:"please login first for generation of refresh token"})
//             }
//             let user1=jwt.verify(refreshtoken, process.env.secretkey2)

//             let user2=await patientshm.findById(user1.patientid)
//             next()
//             req.patient=user1
//             // return res.status(400)
//         } catch (error) {
//             return res.status(400).json({message:error.message})
            
//         }
// }