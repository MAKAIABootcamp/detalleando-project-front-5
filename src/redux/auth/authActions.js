import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { setError, setIsLogged, setUserLogged } from "./authReducer";
import loginFromFirestore from "../../services/loginFromCollection";
import {
  createAnUserInCollection,
  getUserFromCollection,
} from "../../services/getUser";
import {
  createAnSellerUserInCollection,
  getSellerUserFromCollection,
} from "../../services/sellerUser";

export const loginWithCode = (code) => {
  return async (dispatch) => {
    const confirmationResult = window.confirmationResult;
    try {
      confirmationResult.confirm(code).then(async (result) => {
        let userLogged = {};
        const user = result.user.auth.currentUser;
        //Buscar el usuario en la colección por user.uid
        //const userLogged = await getUserFromCollection(user.uid);
        //if(userLogged?.id){
        const authUser = {
          name: user.displayName,
          photoURL: user.photoURL,
          phone: user.phoneNumber,
          accessToken: user.accessToken,
          email: "",
          isSeller: false,
          password: "",
          favoritesShops: [],
          favoritesProducts: [],
          address: [],
          payment: [],
        };
        //userLogged = await createAnUserInCollection(user.uid, authUser)
        //}

        console.log(user);
        dispatch(setUserLogged(authUser));
        //dispatch(setUserLogged(userLogged));
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
      console.log("respuesta de google", userCredential);
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
      sessionStorage.removeItem('user');
      dispatch(setUserLogged(null));
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
      const userLogged ={
        id: foundUser.id,
        isSeller: foundUser.isSeller
      }
      sessionStorage.setItem('user', JSON.stringify(userLogged));
      console.log("respuesta firestore", foundUser);
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
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        loggedUser.email,
        loggedUser.password
      );
      const foundUser = await getSellerUserFromCollection(user.uid);
      // console.log("respuesta firebase", user);
      // console.log("respuesta firestore", foundUser);
      const userLogged ={
        id: foundUser.id,
        isSeller: foundUser.isSeller
      }
      sessionStorage.setItem('user', JSON.stringify(userLogged));
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
