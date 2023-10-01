import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authReducer";
import thunk from "redux-thunk";
import shopsReducer from "../shops/shopsReducer";
import productsReducer from "../products/productsReducer";
import orderReducer from "../order/orderReducer";
import chatReducer from "../chat/chatReducer";


const store = configureStore({
    reducer: {
        auth: authReducer,
        shops: shopsReducer,
        products: productsReducer,
        order: orderReducer,
        chat: chatReducer
    },
    middleware: [thunk]
});

export default store;