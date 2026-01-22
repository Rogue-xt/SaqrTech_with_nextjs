"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PostActions({ postId, currentTitle, currentContent }) {
  const router = useRouter();

  async function handleDelete() {
    if (confirm("Are you sure you want to delete this post?")) {
      const res = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh(); // Refreshes the server data without a full page reload
      }
    }
  }

  return (
    <div className="flex gap-2 mt-4">
      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
      >
        Delete
      </button>

      <Link
        href={`/edit/${postId}`}
        className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded hover:bg-gray-200 transition"
      >
        Edit
      </Link>
    </div>
  );
}
