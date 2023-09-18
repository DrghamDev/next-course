import { NextRequest, NextResponse } from "next/server";
import registerSchema from "./register.schema";
import prisma from "../../../../../prisma/client";
import { hash } from "bcryptjs";

type RequestType = {
  name : string;
  email : string;
  password: string;
}

export async function POST(req : NextRequest) {
  try {
    const body : RequestType = await req.json();
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status : 400 });
    }
    const user = await prisma.user.findUnique({
      where : { email : body.email },
    })
    if (user) {
      return NextResponse.json({ message : "User is already exist" }, { status : 400 });
    }
    const hashedPassword = await hash(body.password, 10);
    const newUser = await prisma.user.create({
      data : {
        email : body.email,
        name : body.name,
        password : hashedPassword,
      }
    })
    return NextResponse.json({ 
      email : newUser.email, 
      name : newUser.name,
    }, {
      status : 201,
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status : 501 });
  }
}