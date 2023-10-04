import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userChats: {},
    chatId: null,
    user: {},
    error: null,
    messages: []
};
  
const userChatsSlice = createSlice({
    name: 'userChats',
    initialState,
    reducers: {
        setUserChats: (state, action) => {
            state.userChats = action.payload;
        },
        setChats: (state, action) => {
            state.messages = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUserId: (state, action) => {
            state.chatId = action.payload + state.user.uid
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addMessage: (state, action) => {
            console.log(action.payload);
            state.messages = {messages:[...action.payload.messages]}
        },
    }
})

export const { setUserChats, setError, setUser, setChats, addMessage, setUserId } = userChatsSlice.actions;
  
export default  userChatsSlice.reducer;