"use client"

import { signIn } from "next-auth/react"
import { useState } from "react";

export default function SignInPage() {
  const [loading,setLoading] = useState(false)

  const handleSignIn = () => {
    setLoading(true);
    signIn("auth0", {callbackUrl: "/"})
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-red-900 px-10 py-13 rounded shadow-xl">
        <h1 className="text-2xl font-bold mb-6">Login or sign up</h1>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          onClick={handleSignIn}>
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-blue-500 border-solid"></div>
              </div>
            ) : "Sign in with Auth0"}
        </button>
      </div>
    </div>
  )
}