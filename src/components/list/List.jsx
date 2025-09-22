import ChatList from "@/components/list/chatlist/ChatList";
import UserInfo from "@/components/list/userinfo/UserInfo";
import React from "react";
const List = () => {
  return (
    <div className="flex-1 pr-5 ">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
