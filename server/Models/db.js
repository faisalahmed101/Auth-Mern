import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose'

// mongodb connection string
const mongo_url = process.env.MONGOURL 


// mongodb connection
mongoose.connect(mongo_url)
        .then(()=>{
            console.log("Database connected successfullly")  
        })
        .catch(err => console.log(err))

