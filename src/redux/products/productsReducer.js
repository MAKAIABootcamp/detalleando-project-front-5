import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    search:[],
    error: null
    
};
  
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        searchProducts: (state, action) => {
            state.search = action.payload
        },
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((item, index) => index !== action.payload)
        },
        setUpdateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...action.payload.data };
            }
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setProducts,addProduct, searchProducts, deleteProduct, setUpdateProduct, setError } = productsSlice.actions;
  
export default  productsSlice.reducer;