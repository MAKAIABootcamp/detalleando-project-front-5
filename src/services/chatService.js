import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { fireStore } from "../firebase/firebaseConfig";

const collectionName = "userChats";
const collectionRef = collection(fireStore, collectionName)

const collectionName2 = "chats";
const collectionRef2 = collection(fireStore, collectionName2)

export const getUserChatsFromCollection = async (uid) => {
    let userChats = {};
    try {
        const docRef = await getDoc(doc(collectionRef, uid));
        console.log(docRef.data());
        if (docRef.exists()) {
            userChats = docRef.data()
            return userChats}
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getChatsFromCollection = async (uid) => {
    let chats = [];
    try {
        const docRef = await getDoc(doc(collectionRef2, uid));

        if (docRef.exists()) {
            chats = docRef.data()
            return chats}
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const addMessagesToCollection = async (uid, newChat) => {
    try {
        const querySnapshot = await updateDoc(doc(collectionRef2, uid), newChat);
        return querySnapshot;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const addChatToCollection = async (uid, sid, newChat) => {
    try {
        const querySnapshot = await updateDoc(doc(collectionRef, uid), newChat);
        const querySnapshot2 = await updateDoc(doc(collectionRef, sid), newChat);
        return querySnapshot, querySnapshot2;
    } catch (error) {
        console.log(error);
        return null;
    }
}