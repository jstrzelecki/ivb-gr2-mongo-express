import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI as string;
console.log(MONGODB_URI);

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI)
    }catch (err: unknown){
        if (err instanceof Error){
            console.error("Błąd połaczenia z MongoDB ", err)
        }else{
            console.log("nieznany błąd ", err)
        }
        process.exit(1);
    }
}

export default connectDB;