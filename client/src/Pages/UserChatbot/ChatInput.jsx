import React, { useState } from "react";
import send from "../../assets/send.png";
import "./Chat.css";

const ChatInput = ({ sendMessage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };

  return (
    <div className='chatinput-container'>
      <input
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        className='chat-text-input'
        value={value}
        type='text'
        onChange={(e) => setValue(e.target.value)}
      />
      <img
        onClick={handleSubmit}
        src={send}
        alt={send}
        width='25px'
        className='send-btn'
      />
    </div>
  );
};

export default ChatInput;
