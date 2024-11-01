// src/components/Navigation.js
"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import AuthContext from "../src/context/AuthContext"; // Adjust the path based on your structure

const Navigation = () => {
  const { user } = useContext(AuthContext); // Call the custom hook

  const img = "/assets/icons/images.png";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clearCookie = async () => {
    try {
      await axios.post("/api/logoutAccount");
      window.location.reload();
    } catch (error) {
      console.error("Error clearing cookies:", error);
    }
  };

  return (
    <>
      {/* Desktop navbar */}
      <div className="hidden md:flex justify-between items-center py-4 px-8">
        <nav className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="font-bold">logo</h1>
          </Link>
          {user && (
            <div className="flex items-center gap-4">
              <Link href="/create-prompt">
                <button className="bg-black text-white px-6 py-2 lg:text-sm rounded-lg hover:bg-zinc-900 transition-all duration-300">
                  Create Prompt
                </button>
              </Link>
              <button
                onClick={clearCookie}
                type="button"
                className="px-6 py-2 lg:text-sm rounded-lg hover:text-white hover:bg-zinc-900 transition-all duration-300"
              >
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  width={40}
                  height={40}
                  src={img}
                  alt="User profile"
                  className="rounded-full"
                />
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden">
        <div className="flex justify-between items-center py-4 px-8">
          <Link href="/">
            <h1 className="font-bold">logo</h1>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            <div className="flex items-center gap-2">
              <Image
                width={40}
                height={40}
                src={img}
                alt="User profile"
                className="rounded-full"
              />
              <span>Profile</span>
            </div>
          </button>
        </div>
        {isOpen && (
          <div className="px-8 py-4 bg-zinc-100 shadow-lg">
            <div className="flex flex-col gap-4">
              <Link href="/create-prompt">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="w-full bg-black text-white px-6 py-2 text-sm rounded-lg hover:bg-zinc-900 transition-all duration-300"
                >
                  Create Prompt
                </button>
              </Link>
              <button
                onClick={clearCookie}
                type="button"
                className="w-full px-6 py-2 text-sm rounded-lg hover:text-white hover:bg-zinc-900 transition-all duration-300"
              >
                Sign Out
              </button>
              <Link href="/profile">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="w-full px-6 py-2 text-sm rounded-lg hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
