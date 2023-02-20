import React from "react";
import "../../App.css";
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import HomeMainbar from "../../component/HomeMainbar/HomeMainbar";
import RightSidebar from "../../component/RightSidebar/RightSidebar";

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Questions;
