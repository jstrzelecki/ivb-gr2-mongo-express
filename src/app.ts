import express, {Request, Response, Express} from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./database";
import taskRoutes from "./routes/taskRoutes";

(async  () => {
    try{
        await connectDB();
        console.log("Connected to MongoDB...");
    }catch (e: unknown){
        if (e instanceof Error){
            console.error(`błąd połąćzenia z bazą ${e}`);
        }
        
        process.exit(1);
    }
    
} )()


dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);
app.use("/tasks", taskRoutes);


app.get("/", (req: Request, res: Response) => {
    res.json({message:"API EXPRESS TS"})
})

export default app;