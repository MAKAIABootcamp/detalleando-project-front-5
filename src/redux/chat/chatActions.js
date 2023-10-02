import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { fireStore } from "../../firebase/firebaseConfig";
import { addChatToCollection, addMessagesToCollection, getChatsFromCollection, getUserChatsFromCollection } from "../../services/chatService";
import { addMessage, setChats, setError, setUserChats } from "./chatReducer";

export const fillUserChatsFromCollection = (uid) => async (dispatch) => {
  try {
    const userChats = await getUserChatsFromCollection(uid);
    dispatch(setUserChats(userChats));
    dispatch(setError(false));
  } catch (error) {
    console.log(error);
    dispatch(
      setError({
        error: true,
        code: error.code,
        message: error.message,
      })
    );
  }
};

export const fillChatsFromCollection = (uid) => async (dispatch) => {
    try {
      const chats = await getChatsFromCollection(uid);
      dispatch(setChats(chats));
      dispatch(setError(false));
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };

  export const addNewChatsToCollection = (id, uid, newMessages, sid, newChat) => async (dispatch) => {
    try {
      const message = await addMessagesToCollection(id, newMessages);
      const currentChat = await addChatToCollection(uid, sid, newChat)
      dispatch(addMessage(message));
      dispatch(setError(false));
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
