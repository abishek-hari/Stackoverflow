import React from "react";
import "../../App.css";
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import HomeMainbar from "../../component/HomeMainbar/HomeMainbar";
import RightSidebar from "../../component/RightSidebar/RightSidebar";
import Chatbot from "../../component/Chatbot/Chatbot";

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
        <div className='chatbot'>
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default Home;
