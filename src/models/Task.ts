import mongoose from "mongoose";

export interface Task{
    title: string;
    description: string;
    completed: boolean;
}

const TaskSchema = new mongoose.Schema({
    title: {type: String,  required: true},
    description: {type: String,  required: true},
    completed: {type: Boolean,  default: false},
}) 