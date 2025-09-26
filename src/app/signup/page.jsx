"use client";
import React, { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import Link from "next/link";
const SignUp = () => {
  const [creds, setCreds] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        creds.email,
        creds.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username: creds.username,
        email: creds.email,
        createdAt: serverTimestamp(),
      });
      await updateProfile(user, {
        displayName: creds.username,
      });
      console.log("User Signed Up:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg border border-white/20 rounded-xl ">
      <div className="flex flex-col mx-10 my-30 ">
        <h1 className="text-5xl font-black">Sign Up</h1>
        <p className="mt-5 pl-3 text-zinc-400">Hello there new guy👋</p>

        <form onSubmit={signup} className="flex flex-col gap-y-2 m-10 w-sm">
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Username"
            type="text"
            value={creds.username}
            onChange={(e) => setCreds({ ...creds, username: e.target.value })}
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Email"
            type="email"
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full"
            placeholder="Password"
            type="password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          <div className="flex items-center mb-5 gap-x-2 cursor-pointer text-zinc-500/80"></div>

          <button
            type="submit"
            className="cursor-pointer bg-sky-500/50 hover:bg-sky-700 rounded-2xl p-2">
            Sign up
          </button>

          <div className="text-right mt-2 items-center mb-5 cursor-pointer text-zinc-500 text-sm">
            <span>Already have an account?</span>
            <Link href="./signin">
              <button
                type="button"
                className="font-bold text-sky-500/60 hover:text-sky-500 cursor-pointer ml-1">
                Sign in
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
