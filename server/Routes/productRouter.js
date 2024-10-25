import express from 'express'
import { isAuthenticate } from '../middlewares/auth.js'


export const productRoute  = express.Router()


//product route
productRoute.get('/', (req, res)=>{
    res.send("this is products route")
})