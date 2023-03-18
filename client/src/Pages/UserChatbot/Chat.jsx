import React, { useState } from "react";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import { useMutation } from "react-query";
import { fetchResponse } from "../../api";
import "./Chat.css";

const Chat = () => {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };

  return (
    <div className='chatbot-section-container'>
      {/* GRADIENT */}
      <div className=' gradient-01 '></div>
      <div className=' gradient-02 '></div>

      {/* HEADER */}
      <div className='chatbot-title'>chatbot</div>

      {/* BODY */}
      <div className=' chatbot-body '>
        <ChatBody chat={chat} />
      </div>

      {/* INPUT */}
      <div className=' chatbot-input'>
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
