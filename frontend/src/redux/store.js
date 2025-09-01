// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import userReducer from './userSlice';
import socketReducer from './socketSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
    socket: socketReducer,
  },
});

export default store;
