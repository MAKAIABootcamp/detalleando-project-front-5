import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const Message = ({ message }) => {

    const { userLogged } = useSelector(store => store.auth);
    const { userChats, user, chatId, messages } = useSelector(store => store.chat);

    const date = new Date(message?.date.seconds * 1000 + message?.date.nanoseconds / 1000000)

    const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}`;
  
    const ref = useRef();
  
    useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message?.senderId === userLogged.id && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message?.senderId === userLogged.id
              ? userLogged.photoURL
              : user?.photoURL
          }
          alt=""
        />
        <span>{formattedDateTime}</span>
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {message?.img && <img src={message?.img} alt="" />}
      </div>
    </div>
  )
}

export default Message