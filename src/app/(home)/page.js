import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h2 className="mb-5">View Employees</h2>
      <Link
        href="/Employees"
        className="text-sm bg-gray-100 text-gray-600 px-7 py-2  rounded hover:bg-gray-200 transition"
      >
        View
      </Link>
    </div>
  );
}
