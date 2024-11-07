import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chat/chatSlice';
import messagesReducer from '../features/messages/messagesSlice';
import authReducer from '../features/auth/authSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    messages: messagesReducer,
    auth: authReducer,
    search: searchReducer,
  },
});

export default store;