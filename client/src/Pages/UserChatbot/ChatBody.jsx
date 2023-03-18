import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import "./Chat.css";

const ChatBody = ({ chat }) => {
  const parent = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);

  return (
    <div className='chatbody-container' ref={parent}>
      {chat.map((message, i) => {
        return (
          <div key={i} className={` chatbody-box ${message.sender === "ai"}`}>
            <pre className='chatbox'>
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ChatBody;
