import cloudinary from "../midleware/cloudinary.js";
import { projectshm } from "../model/HGproject.js";



export let sendproject = async (req, res) => {
    try {

        let detail = req.body
        let { category, title } = detail
        const imageUrls = [];
        if (req.files?.length) {
            for (const file of req.files) {
                const result = await cloudinary.uploader.upload(
                    `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
                    { folder: "products" }
                );
                imageUrls.push(result.secure_url);
            }
        }


        let projects = await projectshm.create({
            category, title, project: imageUrls
        })



        return res.status(200).json({ message: "message added sucessfully", projects })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export let getproject = async (req, res) => {
    try {

        let projects = await projectshm.find()
        if (!projects) {
            return res.status(400).json({ message: "error in fetching project" })
        }

        return res.status(200).json({ message: "get project sucessfully", projects })
    } catch (error) {
        return res.status(400).json({ message: error.message })

    }
}

export const deleteproject = async (req, res) => {
    try {
        let { id } = req.params
        let deletedproject = await projectshm.findByIdAndDelete(id)

        if (!deletedproject) {
            return res.status(400).json({ message: "project not found" })
        }
        return res.status(200).json({ message: "project delete sucessfully" })


    } catch (error) {
        console.log(error)
    }
}