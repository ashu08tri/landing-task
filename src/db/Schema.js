import mongoose from "mongoose";

//Task Schema
const taskSchema = new mongoose.Schema({
    task: String,
    assignee: String,
    priority: String,
    status: String,
    start: Date,
    end: Date
})

export const Task = mongoose.models.tasks || mongoose.model('tasks', taskSchema)