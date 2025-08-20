"use client";

import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center bg-red-900 p-8 rounded shadow*xl">
        <h1 className="text-2xl font-semibold mb-4 text-white">Access Denied</h1>
        <p className="mb-3">You do not have permission to view this page.</p>
        <button
        onClick={() => router.push("/")}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Go Back Home
      </button>
      </div>
    </div>
  );
}
