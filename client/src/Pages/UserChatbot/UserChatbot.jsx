import React from "react";
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import Chatbot from "./OtpVerification";

const UserChatbot = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <Chatbot />
      </div>
    </div>
  );
};

export default UserChatbot;
