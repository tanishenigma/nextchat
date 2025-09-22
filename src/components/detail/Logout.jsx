import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

const Logout = ({ setIsLoggingOut, isLoggingOut }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      toast("Error:" + error);
    }
  };
  return (
    <div className="bg-zinc-700 flex p-5 px-10 rounded-xl border-1 border-zinc-50/20 shadow-2xl">
      <div>
        <p className="text-2xl mt-2">Are you sure you want to Signout?</p>
      </div>

      <form className="flex flex-row justify-end gap-x-2 p-2 mt-15 ml-15">
        <button
          className="bg-zinc-700 border-1 border-zinc-200 text-zinc-50 text-xl rounded-xl  p-3 cursor-pointer hover:bg-zinc-600 duration-300"
          onClick={(e) => {
            setIsLoggingOut(!isLoggingOut);
          }}>
          Cancel
        </button>
        <button
          className="hover:bg-zinc-50 hover:text-zinc-950 text-xl rounded-xl p-3 cursor-pointer bg-zinc-400 text-zinc-50 duration-300"
          onClick={handleLogout}>
          Signout
        </button>
      </form>
    </div>
  );
};

export default Logout;
