import messagesshm from "../model/messagemodel.js"


export let sendmessage=async (req, res)=>{
    try {
        
        let detail=req.body
        const{name, phone, subject, message}=detail

        let newmessagesshm= await messagesshm.create({
            name, phone, subject, message
        })
        return res.status(200).json({message:"message send sucessfully",newmessagesshm})
    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }

} 
export let getmessages= async (req, res)=>{
    try {
        let getmessages=await messagesshm.find()
        if(!getmessages){
            return res.status(400).json({message:"get send message first"})

        }
        return res.status(200).json({message:"fetch messages sucessfully",getmessages})

    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}
