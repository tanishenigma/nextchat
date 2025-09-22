"use client";
import { LockIcon } from "lucide-react";
import React from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const Login = () => {
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg border border-white/20 rounded-xl ">
      <div className="flex flex-col mx-10 my-30 ">
        <h1 className="text-5xl font-black">Sign In</h1>
        <p className="mt-5 pl-3 text-zinc-400">
          Keep it all together and you'll be fine
        </p>

        <div className="flex flex-col gap-y-2 m-10 w-sm">
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Enter your Email"
            type="email"
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Enter your Password"
            type="password"
          />
          <div className="flex items-center mb-5 gap-x-2 cursor-pointer text-zinc-500/80">
            <LockIcon size={15} />
            <span className="text-sm  hover:text-zinc-500 cursor-pointer">
              Forgot Password
            </span>
          </div>
          <button className="cursor-pointer bg-sky-500/50 hover:bg-sky-700 rounded-2xl p-2">
            Sign In
          </button>
          <div className="text-right mt-2 items-center mb-5 cursor-pointer text-zinc-500 text-sm">
            <span>Don't have an account?</span>
            <Link href="./signup">
              {" "}
              <button className="font-bold text-sky-500/60 hover:text-sky-500 cursor-pointer ml-1">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
