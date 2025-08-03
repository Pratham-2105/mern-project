import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNCETED SUCCESSFULLY!");
    } catch(error){
        console.error("Error connecting to MOBGODB", error);
        process.exit(1) // exit with failure;
    }
}