// src/app/api/posts/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.techPost.findMany();
  return NextResponse.json(posts);
}
