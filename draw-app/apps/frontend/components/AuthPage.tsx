"use client"

import { useRouter } from "next/navigation"

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  const router = useRouter()

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-sm p-8 rounded-2xl shadow-2xl bg-gray-900/70 backdrop-blur-lg border border-gray-800">
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">
          {isSignin ? "Welcome Back" : "Create Account"}
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-medium shadow-md"
            onClick={() => {
              // handle login/signup submit
            }}
          >
            {isSignin ? "Sign in" : "Sign up"}
          </button>
        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          {isSignin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() =>
              router.push(isSignin ? "http://localhost:3002/signup" : "http://localhost:3002/signin")
            }
            className="text-indigo-400 hover:underline hover:text-indigo-300 transition"
          >
            {isSignin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  )
}
