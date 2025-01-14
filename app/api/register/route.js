import { registerUser } from "@/db/UserDB";
import { NextResponse } from "next/server";
export async function POST(request){
    const {email,password}=request.body;
     const user=await registerUser(email,password);
    console.log("User registered successfully");
    return NextResponse.json({message:"User registered successfully",status:200,user});
}