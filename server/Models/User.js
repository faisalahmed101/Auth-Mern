import mongoose, { Schema } from "mongoose"


const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

//user model
export const User = mongoose.model('users', userSchema)