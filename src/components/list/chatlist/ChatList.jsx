"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, Plus, PlusCircle } from "lucide-react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ChatList = () => {
  const [addMode, setAddMode] = useState(true);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) return;

    const q = query(
      collection(db, "users"),
      where("displayName", "==", username.trim())
    );

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUser(doc.data()); // ✅ use doc.data()
        });
      } else {
        setUser(null); // no user found
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-col overflow-scroll hide-scrollbar">
      <div className="mt-5">
        <div className="flex bg-zinc-700 rounded-xl p-2 gap-x-2 items-center text-zinc-400">
          <Search />
          <input
            type="text"
            className="border-none outline-none pr-15 bg-transparent text-white"
            placeholder="Search"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
          />
          {addMode ? (
            <Plus
              className="cursor-pointer hover:rotate-45 transition-transform"
              onClick={() => setAddMode((prev) => !prev)}
            />
          ) : (
            <PlusCircle
              className="cursor-pointer"
              onClick={() => setAddMode((prev) => !prev)}
            />
          )}
        </div>
      </div>

      {/* ✅ Search result */}
      {user && (
        <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
          <Image
            className="object-cover border-zinc-400 border-2 rounded-full"
            src={user.photoURL || "https://placehold.co/50x50/png/"}
            width={50}
            height={50}
            alt="UserImage"
          />
          <div className="pl-5">
            <span className="font-bold">{user.displayName}</span>
            <p className="text-zinc-400">{user.email}</p>
          </div>
        </div>
      )}

      {/* Static chat list (sample) */}
      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <Image
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <div className="pl-5">
          <span className="font-bold">Balram</span>
          <p className="text-zinc-400">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
