"use client"; // This handles the typing and clicking
import { useState } from "react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    alert("added");
    setTitle("");
    setContent("");
    // Refresh the page to show the new post
    window.location.reload();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 p-4 border rounded bg-gray-50"
    >
      <h2 className="text-xl mb-4 font-bold">Add New Post</h2>
      <input
        className="block w-full mb-2 p-2 border rounded text-black"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="block w-full mb-2 p-2 border rounded text-black"
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Publish
      </button>
    </form>
  );
}
