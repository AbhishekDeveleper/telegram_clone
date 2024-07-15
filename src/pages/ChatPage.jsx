import React, { useEffect, useState } from "react";
import { getAllChats } from "../services/api";
import Sidebar from "../Components/Sidebar";
import ChatWindow from "../Components/ChatWindow";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    getAllChats(1).then((response) => {
      console.log(response.data.data.data);
      //   console.log(response.data.chats);
      setChats(response.data.data.data);
    });
  }, []);

  const selectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div className="chat-page">
      <Sidebar chats={chats} selectChat={selectChat} />
      <ChatWindow chatId={selectedChatId} />
    </div>
  );
};

export default ChatPage;
