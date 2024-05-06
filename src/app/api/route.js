import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connect } from "@/db/db";
import { Task } from "@/db/Schema";

export async function GET(){
    try {
        await mongoose.connect(connect)
        const task = await Task.find();
        return NextResponse.json({result: task, success: true})
    } catch (error) {
        return NextResponse.json({result: 'Not Found!', success: false,err: error})
    }

}

export async function POST(request){
    const payload = await request.json()
    try {
        await mongoose.connect(connect)
        const task = new Task(payload);
        const newTask = await task.save();
        return NextResponse.json({result: newTask, success: true})
    } catch (error) {
        return NextResponse.json({result: 'Task not saved!', success: false})
    }

}