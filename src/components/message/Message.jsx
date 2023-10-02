import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const Message = ({ message }) => {

    const { userLogged } = useSelector(store => store.auth);
    const { userChats, user, chatId, messages } = useSelector(store => store.chat);
  
    const ref = useRef();
  
    useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === userLogged.id && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === userLogged.id
              ? userLogged.photoURL
              : user?.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message