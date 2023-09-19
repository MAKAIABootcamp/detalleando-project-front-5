import {getShopById, getShopsFromCollection} from "../../services/shopsService"
import { setError, setShopSelection, setShops } from "./shopsReducer";


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
};

export const getShopByIdFromCollection = (idShop) => async (dispatch) => {
    try {
        const shop = await getShopById(idShop);
        dispatch(setShopSelection(shop));
        dispatch(setError(false));
    } catch (error) {
        console.log(error);
        dispatch(setError({
            error:true,
            code: error.code,
            message: error.message
        }))
    }
};

