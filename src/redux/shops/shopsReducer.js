import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shops: [],
    error: null,
    selectedShop: {}
};
  
const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        setShops: (state, action) => {
            state.shops = action.payload;
        },
        setShopSelection: (state, action) => {
            state.selectedShop = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setShops, setShopSelection, setError } = shopsSlice.actions;
  
export default  shopsSlice.reducer;