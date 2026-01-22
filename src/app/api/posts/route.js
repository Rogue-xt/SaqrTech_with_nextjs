// src/app/api/posts/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.techPost.findMany();
  return NextResponse.json(posts);
}


export async function POST(req) {
  const { title, content } = await req.json();
  const newPost = await prisma.techPost.create({ data: { title, content } });
  return NextResponse.json(newPost, { status: 201 });
}


export async function GET() {
  const posts = await prisma.techPost.findMany();
  return NextResponse.json(posts);
}

export async function POST(req) {
  const { title, content } = await req.json();
  const newPost = await prisma.techPost.create({ data: { title, content } });
  return NextResponse.json(newPost, { status: 201 });
}


