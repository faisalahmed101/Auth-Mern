import { User } from "../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



// signup controller
export const signup = async (req, res) => {
    let { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400).json({ msg: "invalid details" })
    }

    password = await bcrypt.hash(password, 10)
    console.log(password);

    const userDetails = new User({ name, email, password })

    try {
        const user = await userDetails.save()
        if (!user) {
            res.status(400).json({ message: "somthing went wrong" })
        }
        res.status(200).json({ message: `new user ${name} created` })

    } catch (error) {
        res.status(400).json(error)
    }

}

// login controller
export const login = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json("Invalid user details")
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ message: "invalid user" })
        }


        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            res.status(400).json({ message: "invalid user" })
        }

        const token = jwt.sign({ email: user.email, _id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })

        res.status(200).json({ message: "Login success", token, email })


    } catch (error) {
        console.log(error);
    }
}