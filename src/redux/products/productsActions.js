
import { getProductsFromCollection, getStoreProducts } from "../../services/productsService";
import { setError, setProducts } from "./productsReducer";


export const fillProductsFromCollection = () => async (dispatch) => {
    try {
        const products = await getProductsFromCollection();
        dispatch(setProducts(products));
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

export const getShopProductFromCollection = (idShop) => async (dispatch) => {
    try {
        const products = await getStoreProducts(idShop);
        dispatch(setProducts(products));   
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