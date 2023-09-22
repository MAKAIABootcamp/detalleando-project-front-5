import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogged: false,
    userLogged: null,
    error: null,
    favoritesShops: [],
    favoritesProducts: [],
    showAddress: null
};
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setFavoritesShops: (state, action) => {
            state.favoritesShops = action.payload
        },
        setFavoritesProducts: (state, action) => {
            state.favoritesProducts = action.payload
        },
        setShowAddress: (state, action) => {
            state.showAddress = action.payload;
        }
    }
})

export const { setIsLogged, setUserLogged, setError, setShowAddress } =
  authSlice.actions;
  
export default authSlice.reducer;