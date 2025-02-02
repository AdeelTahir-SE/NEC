"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { loginUser } from "@/db/UserDB.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false);

  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await loginUser(email, password);

      // Navigate to home page
      router.push("/");
    } catch (err) {
      setError(err.message || "An error occurred while logging in.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfdfe] text-[#333]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center text-[#1f4e79] mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#333] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#333] mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0c273f] text-white font-semibold py-2 rounded-md hover:bg-[#155a7c] transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-[#333] mt-4">
          Do not have an account?{" "}
          <Link href="/register" className="text-[#0f8f98] hover:underline" disabled={loading}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
