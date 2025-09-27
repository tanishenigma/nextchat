"use client";
import React, { useState } from "react";
import { Search, Plus, PlusCircle } from "lucide-react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ChatList = () => {
  const [addMode, setAddMode] = useState(true);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]); // can contain multiple matches
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    const name = username.trim();
    if (!name) {
      setUsers([]);
      return;
    }

    console.log("🔎 Searching for:", name);
    setLoading(true);
    try {
      const q = query(
        collection(db, "users"),
        where("displayName", "==", name)
      );
      const snap = await getDocs(q);
      console.log("📦 QuerySnapshot size:", snap.size);

      if (snap.empty) {
        setUsers([]);
        setError("No user found (exact match required).");
      } else {
        const results = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        console.log("✅ Results:", results);
        setUsers(results);
      }
    } catch (err) {
      console.error("❌ Search error:", err);
      setError(err.message || "Search failed. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-col overflow-scroll hide-scrollbar">
      <div className="mt-5">
        <div className="flex bg-zinc-700 rounded-xl p-2 gap-x-2 items-center text-zinc-400">
          <Search />
          <input
            type="text"
            className="border-none outline-none pr-15 bg-transparent text-white"
            placeholder="Search (exact displayName)"
            value={username}
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="text-sm px-3 py-1 bg-zinc-600 rounded-md hover:bg-zinc-500">
            Search
          </button>

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

      {loading && <div className="text-zinc-400 mt-3">Loading...</div>}
      {error && <div className="text-red-400 mt-3">{error}</div>}

      {/* Render search results (if any) */}
      {users.map((u) => (
        <div
          key={u.id}
          className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
          {/* using plain <img> avoids Next Image domain config problems while debugging */}
          <img
            className="object-cover border-zinc-400 border-2 rounded-full"
            src={u.photoURL || "https://placehold.co/50x50/png/"}
            width={50}
            height={50}
            alt={u.displayName || "User"}
          />
          <div className="pl-5">
            <span className="font-bold">{u.displayName}</span>
            <p className="text-zinc-400">{u.email}</p>
          </div>
        </div>
      ))}

      {/* Static chat list (unchanged) */}
      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <img
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

      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <img
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <div className="pl-5">
          <span className="font-bold">Radha</span>
          <p className="text-zinc-400">Hello</p>
        </div>
      </div>

      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <img
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <div className="pl-5">
          <span className="font-bold">Arjuna</span>
          <p className="text-zinc-400">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
