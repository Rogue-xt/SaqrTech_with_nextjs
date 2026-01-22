// src/app/edit/[id]/page.js
import { prisma } from "@/lib/prisma";
import EditForm from "@/components/EditForm";
import { notFound } from "next/navigation";

export default async function EditPostPage({ params }) {
  const { id } = await params;

  // 1. Get the current post data from Supabase
  const post = await prisma.techPost.findUnique({
    where: { id: Number(id) },
  });

  // If the post doesn't exist, show the 404 page
  if (!post) notFound();

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Article</h1>
      {/* 2. Pass the data into a Client Component Form */}
      <EditForm post={post} />
    </main>
  );
}
