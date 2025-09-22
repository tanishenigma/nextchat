"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, Plus, PlusCircle } from "lucide-react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(true);
  return (
    <div className="flex flex-col overflow-scroll hide-scrollbar">
      <div className="mt-5">
        <div className="flex bg-zinc-700 rounded-xl p-2 gap-x-2 items-center text-zinc-400">
          <Search className="" />
          <input
            type="text"
            className=" border-none outline-none pr-15"
            placeholder="Search"
          />
          {addMode ? (
            <Plus
              className="cursor-pointer hover:rotate-45 transition-transform "
              onClick={() => setAddMode((prev) => !prev)}
            />
          ) : (
            <PlusCircle
              className="cursor-pointer "
              onClick={() => setAddMode((prev) => !prev)}
            />
          )}
        </div>
      </div>
      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <Image
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <div className="pl-5">
          {" "}
          <span className="font-bold">Balram</span>
          <p className="text-zinc-400">Hello</p>
        </div>
      </div>
      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <Image
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <div className="pl-5">
          {" "}
          <span className="font-bold">Radha</span>
          <p className="text-zinc-400">Hello</p>
        </div>
      </div>
      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <Image
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <div className="pl-5">
          {" "}
          <span className="font-bold">Arjuna</span>
          <p className="text-zinc-400">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
