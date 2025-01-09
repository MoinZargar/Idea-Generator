import mongoose from "mongoose";
import { apiError } from "../utils/apiError.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n  MongoDB connected !! DB Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        throw new apiError(500, "MongoDB connection Failed")
        process.exit(1)
    }

}

export default connectDB;