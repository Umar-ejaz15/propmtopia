// src/pages/index.js
"use client";
import Feed from "@/components/Feed";
import Link from "next/link";
import AuthContext from "../src/context/AuthContext"; // Import the custom hook
import { useContext } from "react";


export default function Home() {
  const { user, loading } = useContext(AuthContext); // Call the custom hook

  // Show loading indicator while verifying
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Render the content based on user state
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="max-w-[80%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-10 font-black">
            Discovered And Share
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text font-black">
            AI Powered Prompts
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-center mt-4">
            Promptopia is an open-source AI prompting tool for the modern world
            to discover, create and share creative prompts.
          </p>
          <br />

          {!user ? (
            <div className="flex justify-center items-center flex-col">
              <Link href="/create-account">
                <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200 mx-auto block">
                  Create Account
                </button>
              </Link>
              <span className="py-4 font-black">or</span>
              <Link href="/login-account">
                <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200 mx-auto block">
                  Login Account
                </button>
              </Link>
            </div>
          ) : (
            <input
              type="text"
              placeholder="Search for a tag or a prompt"
              className="border border-gray-300 rounded-lg p-2 w-full mt-4"
            />
          )}
        </div>
      </div>
      
      <Feed />
    </>
  );
}
