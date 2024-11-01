"use client";
import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const router = useRouter();
  // Define form input types
  type FormInputs = {
    email: string;
    password: string;
  };

  const form = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  // Define submit handler
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      // Send data to API
      const response = await axios.post("/api/loginAccount", data, {
        headers: { "Content-Type": "application/json" },
      });

      // Log database response if needed
      console.log("Database response:", response.data);

      // Check if account creation was successful
      if (response.status === 200) {
  // Set cookie with token from response
  document.cookie = `token=${response.data.token}; path=/; max-age=31536000; SameSite=Strict; Secure`;
  // Store token in localStorage as backup
  localStorage.setItem("token", response.data.token);
        router.push("/"); // Redirect to login page
        reset(); // Clear the form on success
      }
    } catch (error: unknown) {
      // Handle Axios error
      if (axios.isAxiosError(error)) {
        console.error(
          "Error creating account:",
          error.response?.data?.message || error.message
        );
      } else {
        console.error("Error login account:", String(error));
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-600">
            login your account
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                {...register("email", { required: true })}
                type="email"
                autoComplete="email"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                {...register("password", { required: true })}
                type="password"
                autoComplete="new-password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              login Account
            </button>
          </div>
          <div className="text-center mt-4">
            <Link
              href="/create-account"
              className="text-indigo-600 hover:text-indigo-500 font-medium text-sm"
            >
              Don't have an account? Create one
            </Link>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default page;
