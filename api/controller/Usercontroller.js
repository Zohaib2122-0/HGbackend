import usershm from "../model/usermodel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export let registeruser = async (req, res) => {
    try {

        let detail = req.body
        const { name, email, password, role } = detail

        const existingUser = await usershm.findOne({ email });

        if (existingUser) {
            console.log("user already exist");
            return res.status(400).json({ message: "User already exists" });
        }


        // Add password validation with regex
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
        if (!strongPasswordRegex.test(password)) {
            return res.status(400).json({
                message: "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
            });
        }


        let hasspassword = await bcrypt.hash(password, 10)
        let newusershm = await usershm.create({
            name,
            email,
            password: hasspassword,
            role
        })




        let token = jwt.sign({ _id: newusershm._id }, process.env.secretkey1, { expiresIn: "7d" })


        res.cookie("logintoken", token, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000

        })


        return res.status(200).json({ message: "user register sucessfully", newusershm })
    } catch (error) {
        return res.status(400).json({ message: error.message })

    }

}


export let loginuser = async (req, res) => {
    try {

        let detail = req.body
        const { email, password } = detail
        let user = await usershm.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "please register first" })
        }
        let user2 = await bcrypt.compare(password, user.password)
        if (!user2) {
            return res.status(400).json({ message: "invalid password" })
        }

        let logintoken = jwt.sign({ _id: user._id }, process.env.secretkey2, { expiresIn: "7d" })

        res.cookie("logintoken", logintoken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000

        })

        return res.status(200).json({
            message: "login sucessfully", user, logintoken
        })

    } catch (error) {
        return res.status(400).json({ message: error.message })

    }

}

export let logout = (req, res) => {
    try {

        res.clearCookie("logintoken", {
            secure: true,
            httpOnly: true
        })

        return res.status(200).json({ message: "Logout sucessfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export let createuser = async (req, res) => {
    try {

        let detail = req.body
        let { name, email, password, role } = detail
        let newusershm = await usershm.create({
            name, email, password, role
        })
        return res.status(200).json({ message: "get user", newusershm, role: newusershm.role })
    } catch (error) {
        console.log(error)
    }
}

export let getuser = async (req, res) => {
    try {

        let getuser = await usershm.find()
        return res.status(200).json({ message: "get user sucessfully", getuser })
    } catch (error) {
        console.log(error)
    }
}