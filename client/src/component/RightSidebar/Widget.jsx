import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.png";
import pen from "../../assets/pen-solid.png";
import blacklogo from "../../assets/blacklogo.png";

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt='pen' width='16' />
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt='pen' width='16' />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt='comment' width='16' />
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt='comment' width='16' />
          <p>
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt='blacklogo' width='16' />
          <p>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;