// src/app/api/posts/[id]/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// 1. FETCH ONE POST
export async function GET(req, { params }) {
  const { id } = await params;
  const post = await prisma.techPost.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(post);
}

// 2. UPDATE A POST (PUT or PATCH)
export async function PATCH(req, { params }) {
  const { id } = await params;
  const { title, content } = await req.json();
  const updated = await prisma.techPost.update({
    where: { id: Number(id) },
    data: { title, content },
  });
  return NextResponse.json(updated);
}

// 3. DELETE A POST
export async function DELETE(req, { params }) {
  const { id } = await params;
  await prisma.techPost.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: "Post deleted" });
}
