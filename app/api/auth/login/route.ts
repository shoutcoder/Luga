import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
    try{
        const { email, password,rememberMe } = await req.json();

      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !user.password) {
        return NextResponse.json({ error: "Invalid credentials",message:"No User Found." }, { status: 401 });
      }
    
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return NextResponse.json({ error: "Invalid credentials",message:"Wrong Password" }, { status: 401 });
      }
      const maxAge = rememberMe ? 30 * 24 * 60 * 60 : 7 * 24 * 60 * 60; // seconds
      const token = jwt.sign({ userId:user.id,role:user.role}, JWT_SECRET, { expiresIn: maxAge });
    
      const res = NextResponse.json({ message: "Login successful" });
      res.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge,
      });
    
      return res;
    }
    catch(err){
        return NextResponse.json(
            { error: "Internal Server Error", message: "Something went wrong" },
            { status: 500 }
          );
    }
  
}
