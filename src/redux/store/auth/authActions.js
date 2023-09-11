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
                    accessToken: user.accessToken
                }
                console.log(user);
                dispatch(setUserLogged(authUser));
                dispatch(setIsLogged(true));
                dispatch(setError(false));
            })
        } catch (error) {
            console.log(error);
            dispatch(setError({
                error: true,
                code: error.code,
                message: error.message
            }))
        }
    }
}