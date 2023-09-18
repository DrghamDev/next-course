import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { randomInt } from "crypto";
import prisma from "../../../../prisma/client";

export async function GET(req : NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users : users });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
  // return NextResponse.json({ message : "Users"})
}

export async function POST(req : NextRequest) {
  const body = await req.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status : 400 });
  }
  const user = await prisma.user.create({
    data : {
      email : body.email,
      name : body.name,
      password : body.password,
    }
  })
  return NextResponse.json({ 
    user : user,
  }, {
    status : 201,
  })
}