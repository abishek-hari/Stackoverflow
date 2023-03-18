import React from "react";
import { Link } from "react-router-dom";

import "./Chatbot.css";
import chatbot from "../../assets/chatbot.png";

const Chatbot = () => {
  return (
    <div className='chatbot'>
      <Link to='/Userchat'>
        <img
          src={chatbot}
          alt='chatbot'
          className='chatbot-logo'
          width='42px'
        />
      </Link>
    </div>
  );
};

export default Chatbot;
