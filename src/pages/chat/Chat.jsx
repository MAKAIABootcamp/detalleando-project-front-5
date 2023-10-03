import React, { useEffect, useState } from 'react'
import "./chat.scss"
import NavDesktop from '../../components/nav-desktop/NavDesktop'
import Message from '../../components/message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { fireStore } from '../../firebase/firebaseConfig';
import { addNewChatsToCollection, fillChatsFromCollection, fillUserChatsFromCollection } from '../../redux/chat/chatActions';
import { setUser, setUserId } from '../../redux/chat/chatReducer';
import Attach from "/camera.svg"
import { v4 as uuidv4 } from 'uuid';
import { Timestamp, arrayUnion, serverTimestamp } from '@firebase/firestore';

const Chat = () => {

    const { userLogged } = useSelector(store => store.auth);
    const { userChats, user, chatId, messages } = useSelector(store => store.chat);
    const dispatch = useDispatch()
    const [text, setText] = useState("");
    const [send, setSend] = useState('')
    const [img, setImg] = useState(null);
  
    useEffect(() => {
    dispatch(fillUserChatsFromCollection(userLogged.id))
    }, [userLogged, send]);
  
    const handleSelect = (u) => {
      dispatch(setUser(u));
      dispatch(setUserId(userLogged.id))
      console.log(user);
    };
    console.log(messages?.messages);
  
    useEffect(() => {
      dispatch(fillChatsFromCollection(chatId))
    }, [chatId, send]);
  
  
    const handleSend = async () => {
    //   if (img) {
    //     const storageRef = ref(storage, uuid());
  
    //     const uploadTask = uploadBytesResumable(storageRef, img);
  
    //     uploadTask.on(
    //       (error) => {
    //         //TODO:Handle Error
    //       },
    //       () => {
    //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //           await updateDoc(doc(db, "chats", data.chatId), {
    //             messages: arrayUnion({
    //               id: uuid(),
    //               text,
    //               senderId: userLogged.uid,
    //               date: Timestamp.now(),
    //               img: downloadURL,
    //             }),
    //           });
    //         });
    //       }
    //     );
    //   } else {
      dispatch(addNewChatsToCollection(chatId, userLogged.id, {messages: arrayUnion({
        id: uuidv4(),
        text,
        senderId: userLogged.id,
        date: Timestamp.now(),
      })}, user.uid, {
        [chatId + ".lastMessage"]: {
          text,
        },
        [chatId + ".date"]: serverTimestamp(),
      }))
      setSend(text)
      setText("");
    //   setImg(null);
    };

    return (
    <>
    <header>
        <NavDesktop/>
    </header>
    <main className='main-chat'>
        <div className='sidebar'>
    <div className="chats">
      {userChats && Object.entries(userChats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div 
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo?.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo?.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    <div className="chat">
      <div className="chatInfo">
        <img src={user?.photoURL} alt="" />
        <span>{user?.displayName}</span>
      </div>
      <div className="messages">
      { messages && messages?.messages?.length && messages.messages.map((m) => (
        <Message message={m} key={m?.id} />
      ))}
    </div>
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        {/* <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label> */}
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
    </div>
    </main>
    </>
  )
}

export default Chat