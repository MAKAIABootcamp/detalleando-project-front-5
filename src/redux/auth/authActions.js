import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, fireStore } from "../../firebase/firebaseConfig";
import { setError, setFavoritesProducts, setFavoritesShops, setIsLogged, setUpdateUser, setUserLogged, setUserPayment } from "./authReducer";
import loginFromFirestore from "../../services/loginFromCollection";
import {
  createAnUserInCollection,
  getUserFromCollection,
} from "../../services/getUser";
import {
  createAnSellerUserInCollection,
  getSellerUserFromCollection,
} from "../../services/sellerUser";
import { Firestore, doc, setDoc, updateDoc } from "firebase/firestore";

export const loginWithCode = (code) => {
  return async (dispatch) => {
    const confirmationResult = window.confirmationResult;
    try {
      confirmationResult.confirm(code).then(async (result) => {
        // let userLogged = {};
        const user = result.user.auth.currentUser;
        //Buscar el usuario en la colección por user.uid
        const userLogged = await getUserFromCollection(user.uid);
        if (!userLogged) {
          const authUser = {
            displayName: "",
            photoURL: "",
            phone: user.phoneNumber,
            accessToken: user.accessToken,
            email: "",
            isSeller: false,
            favoritesShops: [],
            favoritesProducts: [],
            address: [],
            payment: [],
          };
          await setDoc(doc(fireStore, "users", user.uid), authUser);
          // userLogged = await createAnUserInCollection(user.uid, authUser)
          dispatch(setUserLogged(authUser));
        } else {
          dispatch(setUserLogged(userLogged));
        }

        // console.log(user);
        dispatch(setIsLogged(true));
        dispatch(setError(false));
      });
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
};

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return async (dispatch) => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      // console.log("respuesta de google", userCredential);
      const { user } = userCredential;
      const { user: userLogged, error } = await loginFromFirestore(user);
      if (userLogged) {
        dispatch(setUserLogged(userLogged));
        dispatch(setIsLogged(true));
        dispatch(setError(false));
      } else {
        dispatch(
          setError({
            error: true,
            ...error,
          })
        );
      }
    } catch (error) {
      console.log("error", error.error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("user");
      dispatch(setUserLogged(null));
      dispatch(setFavoritesShops([]));
      dispatch(setFavoritesProducts([]));
      dispatch(setIsLogged(false));
      dispatch(setError(false));
    } catch (error) {
      console.log("error", error.error);
    }
  };
};

export const loginWithEmailAndPassword = (loggedUser) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        loggedUser.email,
        loggedUser.password
      );
      const foundUser = await getUserFromCollection(user.uid);
      // console.log("respuesta firebase", user);
      const userLogged = {
        id: foundUser.id,
        isSeller: foundUser.isSeller,
      };
      sessionStorage.setItem("user", JSON.stringify(userLogged));
      // console.log("respuesta firestore", foundUser);
      dispatch(setUserLogged(foundUser));
      dispatch(setIsLogged(true));
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
};

export const createAnUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      await updateProfile(auth.currentUser, {
        displayName: newUser.displayName,
        photoURL: newUser.photoURL,
      });
      const createdUser = await createAnUserInCollection(user.uid, newUser);
      dispatch(setUserLogged(createdUser));
      dispatch(setIsLogged(true));
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
};

export const loginSellerWithEmailAndPassword = (loggedUser) => {
  return async (dispatch) => {
    console.log(loggedUser)
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        loggedUser.email,
        loggedUser.password
      );
      const foundUser = await getSellerUserFromCollection(user.uid);
      // console.log("respuesta firebase", user);
      // console.log("respuesta firestore", foundUser);
      const userLogged = {
        id: foundUser.id,
        isSeller: foundUser.isSeller,
      };
      sessionStorage.setItem("user", JSON.stringify(userLogged));
      dispatch(setUserLogged(foundUser));
      dispatch(setIsLogged(true));
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
};

export const createAnSellerUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      await updateProfile(auth.currentUser, {
        displayName: newUser.displayName,
        photoURL: newUser.photoURL,
      });
      const createdSellerUser = createAnSellerUserInCollection(
        user.uid,
        newUser
      );
      dispatch(setUserLogged(createAnSellerUser));
      dispatch(setIsLogged(true));
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
};

export const getUserActionFromCollection = (uid) => {
  return async (dispatch) => {
    try {
      const userLogged = await getUserFromCollection(uid);
      dispatch(setUserLogged(userLogged));
      dispatch(setFavoritesShops(userLogged.favoritesShops));
      dispatch(setFavoritesProducts(userLogged.favoritesProducts));
      dispatch(setIsLogged(true));
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
};

export const getSellerActionFromCollection = (uid) => {
  return async (dispatch) => {
    try {
      const userLogged = await getSellerUserFromCollection(uid);
      // console.log(userLogged);
      dispatch(setUserLogged(userLogged));
      dispatch(setFavoritesShops([]));
      dispatch(setFavoritesProducts([]));
      dispatch(setIsLogged(true));
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
};

export const updateFavoritesShops = (idUser, favoritesShops) => {
  return async (dispatch) => {
    try {
      const userRef = doc(fireStore, "users", idUser);
      const response = await updateDoc(userRef, favoritesShops);
      dispatch(setFavoritesShops(favoritesShops.favoritesShops));
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
};

export const updateFavoritesProducts = (idUser, favoritesProducts) => {
  return async (dispatch) => {
    try {
      const userRef = doc(fireStore, "users", idUser);
      const response = await updateDoc(userRef, favoritesProducts);
      dispatch(setFavoritesProducts(favoritesProducts.favoritesProducts));
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
};

export const updateUserPayment = (idUser, paymentArray) => {
  return async (dispatch) => {
    try {
      const userRef = doc(fireStore, "users", idUser);
      const response = await updateDoc(userRef, paymentArray);
      // dispatch(setUserPayment(paymentArray));
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
}

export const updateSellerUser = (idUser, updateInfo) => {
  // console.log(idUser)
  // console.log(updateInfo)
  return async (dispatch) => {
    try {
      const userRef = doc(fireStore, 'sellersUsers', idUser);
      const response =await updateDoc(userRef, updateInfo);
      dispatch(setUpdateUser(updateInfo));
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message
        })
      )
    }
  }
}
