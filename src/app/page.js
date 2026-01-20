// src/app/page.js
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.techPost.findMany();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Latest Tech News</h1>
      {posts.length === 0 ? (
        <p>No posts found. Add one in Prisma Studio!</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
