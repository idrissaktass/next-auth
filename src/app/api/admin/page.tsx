"use client";

import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((sess) => {
      if (sess?.user.role !== "admin") {
        router.replace("/unauthorized")
      }
      if (!sess) {
        router.replace("/");
      } else {
        setSession(sess);
      }
      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-800">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-slate-800">
      {session.user.role === "admin" && (
        <div className="flex flex-col items-center bg-red-900 p-8 rounded shadow*xl">
          <h1 className="text-2xl font-semibold mb-4 text-white">Admin Panel - Welcome {session.user.name}</h1>
          <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Go Back Home
        </button>
        </div>
      )}
    </div>
  );
}
