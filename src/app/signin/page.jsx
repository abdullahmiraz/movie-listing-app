"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import Link from "next/link"; // Import Link from next/link
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    router.push("/admin"); // router should be mounted properly at this point
  };

  return (
    <div className="wrapper flex justify-center items-center h-screen">
      <div className="form-wrapper bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-8">Sign In</h1>
        <form onSubmit={handleForm} className="form">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm"> 
          <a href="/signup">
            <a className="text-blue-500">Sign Up</a>
          </a>
        </p>{" "}
      </div>
    </div>
  );
}

export default Page;
