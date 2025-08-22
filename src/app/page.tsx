"use client"

import {use, useEffect, useState } from "react";
import {getSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [session, setSession] = useState<any>(null)
  const [loading,setLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    getSession().then((sess) => {
      setSession(sess);
      setLoading(false);
    });
  }, []);

  if(loading) {
    return(
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    )
  }

  if(!session) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center bg-red-900 p-8 rounded shadow*xl">
          <h1 className="text-2xl font-semibold mb-4 text-white">Welcome, please login or signup.</h1>
          <a href="/auth/signin" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</a>
        </div>
      </div>
    )
  }


  const auth0LogoutUrl = `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/v2/logout?returnTo=${encodeURIComponent(
    process.env.NEXT_PUBLIC_NEXTAUTH_URL!
  )}&client_id=${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}`;

  const handleLogout = () => {
    signOut({ redirect: false });
    window.location.href = auth0LogoutUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center bg-red-900 p-8 rounded shadow*xl">
        <h1 className="text-3xl font-bold mb-4 text-white">Welcome, {session.user?.name}!</h1>
        <p className="text-white mb-6">Role: {session.user?.role || "user"}</p>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
        >
          Log out
        </button>
      </div>
      <button
          onClick={() => router.push("/api/admin")} 
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer mt-10"
        >
          Test the admin page
        </button>
    </div>
  );
}
