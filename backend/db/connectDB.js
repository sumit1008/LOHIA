import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);  // Correct string interpolation
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
        process.exit(1);  // Exit the process with failure
    }
};
