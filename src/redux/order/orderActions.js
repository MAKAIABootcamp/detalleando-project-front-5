import { createAnOrderInCollection, getOrdersFromCollection } from "../../services/orderService";
import { setOrders, addOrder, setCurrentOrder, setError } from "../order/orderReducer"

export const fillOrdersFromCollection = () => async (dispatch) => {
    try {
        const orders = await getOrdersFromCollection();
        dispatch(setOrders(orders));
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

export const createAnOrderAction = (newOrder) => async (dispatch) => {
    try {
        const order = await createAnOrderInCollection(newOrder);
        dispatch(addOrder(order));
        dispatch(setError(false));
    } catch (error) {
        console.log(error);
        dispatch(setError({
            error: true,
            code: error.code,
            mesage: error.message
        }))
    }
}