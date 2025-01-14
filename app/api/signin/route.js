import { loginUser } from "@/db/UserDB";
export default function POST(request){
const {email,password}=request.body;
const user=loginUser(email,password);
console.log("User logged in successfully");
return NextResponse.json({message:"User logged in successfully",status:200,user});
}