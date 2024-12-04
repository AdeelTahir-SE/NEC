import { registerUser } from "@/app/DB/UserDB";
import { NextResponse } from "next/server";
export function POST(request){
    const {email,password}=request.body;
     const user=registerUser(email,password);
    console.log("User registered successfully");
    return NextResponse.json({message:"User registered successfully",status:200,user});
}