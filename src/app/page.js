import Chat from "@/components/chat/Chat";
import Detail from "@/components/detail/Detail";
import List from "@/components/list/List";
import SignUp from "@/app/signup/page";

export default function Home() {
  const user = true;
  return (
    <>
      {user ? (
        <div className="container flex ">
          <div className="flex justify-between m-4 items-stretch w-full">
            <List />
            <Chat />
            <Detail />
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
