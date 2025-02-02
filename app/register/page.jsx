"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { registerUser } from "@/db/UserDB.js"; // Adjust the path to your file containing the registerUser function

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading,setLoading]=useState(false);

  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await registerUser(name,email, password);
      setSuccess("User registered successfully.");
      setName("");
      setError("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      router.push("/");
    } catch (err) {
      setError(err.message || "An error occurred while registering.");
      setSuccess("");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfdfe] text-[#333]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center text-[#1f4e79] mb-6">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#333] mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="mb-4">
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

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-[#333] mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0c273f] text-white font-semibold py-2 rounded-md hover:bg-[#155a7c] transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-[#333] mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#0f8f98] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
