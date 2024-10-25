import express from 'express'
import { login, signup } from '../Controllers/authController.js'

const authRoute = express.Router()


// signup route
authRoute.post('/signup', signup)

//login route
authRoute.post('/login', login)

export default authRoute