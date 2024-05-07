import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connect } from "@/db/db";
import { Task } from "@/db/Schema";

export async function DELETE(request,{params}){
    const {id} = params;
    try {
        await mongoose.connect(connect)
        await Task.findOneAndDelete({_id: id});
        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({success: false,err: error})
    }

}