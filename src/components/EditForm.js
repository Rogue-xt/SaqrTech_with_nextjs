"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const router = useRouter();

  async function handleUpdate(e) {
    e.preventDefault();

    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/"); // Redirect back to homepage
      router.refresh(); // Ensure the data is fresh
    }
  }

  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-4">
      <input
        className="border p-2 rounded text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 rounded h-40 text-black"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
