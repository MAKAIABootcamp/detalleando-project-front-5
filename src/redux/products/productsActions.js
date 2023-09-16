
import { getProductsFromCollection } from "../../services/productsService";
import { setProducts } from "./productsReducer";


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
}