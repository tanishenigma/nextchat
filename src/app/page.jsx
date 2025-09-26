"use client";
import Chat from "@/components/chat/Chat";
import Detail from "@/components/detail/Detail";
import List from "@/components/list/List";
import SignUp from "@/app/signup/page";
import { useAuthContext } from "@/app/Contexts/useAuthContext";
import { useState } from "react";
import Logout from "@/components/detail/Logout";

export default function Home() {
  const { user, loading } = useAuthContext();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      {isLoggingOut ? (
        <>
          <Logout
            setIsLoggingOut={setIsLoggingOut}
            isLoggingOut={isLoggingOut}
          />
        </>
      ) : user ? (
        <div className="container flex ">
          <div className="flex justify-between m-4 items-stretch w-full">
            <List />
            <Chat />

            <Detail
              isLoggingOut={isLoggingOut}
              setIsLoggingOut={setIsLoggingOut}
            />
          </div>
        </div>
      ) : (
        <div className="flex ">
          <div className="relative z-10">
            <SignUp />
          </div>
        </div>
      )}
    </>
  );
}
