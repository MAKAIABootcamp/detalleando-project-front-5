import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authReducer";
import thunk from "redux-thunk";
import shopsReducer from "../shops/shopsReducer";
import productsReducer from "../products/productsReducer";


const store = configureStore({
    reducer: {
        auth: authReducer,
        shops: shopsReducer,
        products: productsReducer
    },
    middleware: [thunk]
});

export default store;