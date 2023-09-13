import { doc, getDoc, setDoc } from "firebase/firestore";
import { fireStore } from "../firebase/firebaseConfig";

const collectionSellersUsers = "sellersUsers";

//Obtenemos un usuario en la colección users
export const getSellerUserFromCollection = async (uid) => {
    try {
      const userRef = doc(fireStore, collectionSellersUsers, uid);
      const user = await getDoc(userRef);
      if (user.exists()) {
        // console.log("Document data:", user.data());
        return {
          id: user.id,
          ...user.data(),
        };
      } else {
        // console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

//Crear usuario en la collection sellersUsers
export const createAnSellerUserInCollection = async (uid, newUser) =>{
    try {
        const newUserRef = doc(fireStore, collectionSellersUsers, uid);
        await setDoc(newUserRef, newUser);
        return {
          ok: true,
          user: {
            id: uid,
            ...newUser,
          },
        };
      } catch (error) {
        console.log(error);
        return false;
      }
}