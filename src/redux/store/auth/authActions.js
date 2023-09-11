import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { setError, setIsLogged, setUserLogged } from "./authReducer";

export const loginWithCode = (code) => {
  return async (dispatch) => {
    const confirmationResult = window.confirmationResult;
    try {
      confirmationResult.confirm(code).then((result) => {
        const user = result.user.auth.currentUser;
        const authUser = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          accessToken: user.accessToken,
        };
        console.log(user);
        dispatch(setUserLogged(authUser));
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
      dispatch(setUserLogged(null));
      dispatch(setIsLogged(false));
      dispatch(setError(false));
    } catch (error) {
      console.log("error", error.error);
    }
  };
};
