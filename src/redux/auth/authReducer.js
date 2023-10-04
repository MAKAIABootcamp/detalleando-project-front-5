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
        },
        setUpdateUser: (state, action) => {
            state.userLogged = {...state.userLogged, ...action.payload};
        },
        setUserPayment: (state, action) => {
            state.userLogged.payment = action.payload
        },
        setUserAddress: (state, action) => {
            state.userLogged.address = action.payload
        },
        setUpdateUserProfile: (state, action) => {
            state.userLogged.displayName = action.payload.displayName;
            state.userLogged.photoURL = action.payload.photoURL;
            state.userLogged.birthday = action.payload.birthday;
          },
    }
})

export const { setIsLogged, setUserLogged, setError, setFavoritesShops, setFavoritesProducts, setShowAddress, setUpdateUser, setUserPayment, setUserAddress, setUpdateUserProfile } = authSlice.actions;

export default authSlice.reducer;