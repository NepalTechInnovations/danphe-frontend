import React, { useState } from 'react';
import { FaRocketchat, FaTimes } from "react-icons/fa";
import '../chatBox/chatBox.css';

const ChatBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  }

  const handleChatNow = () => {
    window.open('/new-order', '_blank', 'width=600, height=800'); 
  }

  if (!isVisible) return null;

  return (
    <div className="chatBoxContainer">
      <button className="closeBtn" onClick={handleClose}><FaTimes /></button>
      <div className="box">
        <FaRocketchat className='chat_mgs_icon' />
        <div className='chatContent'>
          <h2>Have a question?</h2>
          <p>Our incorporation specialists have the answer.</p>
        </div>
      </div>
      <button className='chatBtn' onClick={handleChatNow}>Chat Now</button>
    </div>
  );
}

export default ChatBox;


