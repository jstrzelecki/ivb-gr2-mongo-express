import express, {Request, Response} from "express";
import TaskModel, {Task} from "../models/Task";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const tasks: Array<Task> = await TaskModel.find()
        res.json(tasks)
    } catch (err){
        res.status(500).json({error: `nie udało się pobrać zadaniań ${err}`});
    }
})

router.post("/", async (req: Request, res: Response) => {
    try{
        const {title, description} = req.body;
        const newTask = new TaskModel({title,  description})
        await newTask.save()
        res.status(201).json({message: "Dodano nowe zadanie ", newTask})
        
    }catch (err){
        res.status(500).json({Error: "nie udało się dodac zadania ", err});
    }
})

export default router;
