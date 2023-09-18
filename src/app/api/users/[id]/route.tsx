import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  req : NextRequest, 
  { params } : { params : { id : string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where : { id : params.id },
    });
    if (!user) {
      return NextResponse.json({ message : "User may not found" }, { status : 404})
    }
    return NextResponse.json({ user : user });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status : 501 });
  }
}

export async function PUT(
  req : NextRequest,
  { params } : { params : { id : string } },
) {
  const body = await req.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status : 400 });
  }
  try {
    const user = await prisma.user.update({
      where : { id : params.id },
      data : {
        email : body.email,
        name : body.name,
        password : body.password,
      }
    })
    if (!user) {
      return NextResponse.json({ message : "User may not found" }, { status : 404 });
    }
    return NextResponse.json({ user : user })
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status : 501 });
  }
}