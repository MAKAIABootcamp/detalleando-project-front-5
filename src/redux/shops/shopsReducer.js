import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shops: [],
    error: null
    
};
  
const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        setShops: (state, action) => {
            state.shops = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setShops, setError } = shopsSlice.actions;
  
export default  shopsSlice.reducer;