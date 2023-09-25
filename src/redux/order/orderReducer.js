import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    currentOrder: null,
    error: null
    
};
  
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        addOrder: (state, action) => {
            state.orders = [
                ...state.orders,
                action.payload
            ]
        },
        setCurrentOrder: (state, action) => {
            state.currentOrder = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setAmountProduct: (state, action) => {
            const { payload } = action;
            state.currentOrder.products[payload.index].amount = payload.amount;
        },
        setAdditionalInfo: (state, action) => {
            state.currentOrder.sendTo.additional = action.payload.additional;
        },
        deleteOrder: (state) => {
            state.currentOrder = null;
        },
        deleteProduct: (state, action) => {
            const productIdToDelete = action.payload;
            state.currentOrder.products = state.currentOrder.products.filter(
                (product) => product.id !== productIdToDelete
            );
        }
    }
})

export const { setOrders, addOrder, setCurrentOrder, setError, setAdditionalInfo, setAmountProduct, deleteOrder, deleteProduct } =
  ordersSlice.actions;
  
export default ordersSlice.reducer;