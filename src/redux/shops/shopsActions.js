import {getShopsFromCollection} from "../../services/shopsService"
import { setShops } from "./shopsReducer";


export const fillShopsFromCollection = () => async (dispatch) => {
    try {
        const shops = await getShopsFromCollection();
        dispatch(setShops(shops));
        dispatch(setError(false));
    } catch (error) {
        console.log(error);
        dispatch(setError({
            error: true,
            code: error.code,
            message: error.message
        }))
    }
}