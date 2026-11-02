import mongoose from 'mongoose'
import { env } from './env.js'

export async const connectDB = () => {
    await mongoose.connect(env.mongoUri)
    console.log("MongoDB connecte")
}
