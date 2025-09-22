"use client";
import { LockIcon } from "lucide-react";
import React from "react";

const SignUp = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg border border-white/20 rounded-xl ">
      <div className="flex flex-col mx-10 my-30 ">
        <h1 className="text-5xl font-black">Sign Up</h1>
        <p className="mt-5 pl-3 text-zinc-400">Hello there new guy👋</p>

        <div className="flex flex-col gap-y-2 m-10 w-sm">
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Username"
            type="text"
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Email"
            type="email"
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Password"
            type="password"
          />
          <div className="flex items-center mb-5 gap-x-2 cursor-pointer text-zinc-500/80"></div>
          <button className="cursor-pointer bg-sky-500/50 hover:bg-sky-700 rounded-2xl p-2">
            Sign up
          </button>
          <div className="text-right mt-2 items-center mb-5 cursor-pointer text-zinc-500 text-sm">
            <span>Already have an account?</span>
            <a href="./signin">
              {" "}
              <button className="font-bold text-sky-500/60 hover:text-sky-500 cursor-pointer ml-1">
                Sign in
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
