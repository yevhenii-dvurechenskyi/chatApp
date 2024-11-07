import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const getCurrentDateTime = () => {
  const now = new Date();
  return {
    Time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    Day: now.toLocaleDateString(),
  };
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [
      {
        ChatId: 1,
        avatar: "latin_b",
        userName: "Bill Greddy",
        lastMessage: null,
        messages: [
          {
            who: "client",
            messageId: uuidv4(),
            Date: {
              Time: getCurrentDateTime().Time,
              Day: getCurrentDateTime().Day,
            },
            Text: "Hello my dear friend!"
          },
          {
            who: "server",
            messageId: uuidv4(),
            Date: {
              Time: getCurrentDateTime().Time,
              Day: getCurrentDateTime().Day,
            },
            Text: "Hi bro)"
          }
        ]
      },
      {
        ChatId: 2,
        avatar: "latin_j",
        userName: "Josefina",
        lastMessage: null,
        messages: [
          {
            who: "client",
            messageId: uuidv4(),
            Date: {
              Time: getCurrentDateTime().Time,
              Day: getCurrentDateTime().Day,
            },
            Text: "Good morning!"
          },
          {
            who: "server",
            messageId: uuidv4(),
            Date: {
              Time: getCurrentDateTime().Time,
              Day: getCurrentDateTime().Day,
            },
            Text: "Good morning, how are you?"
          }
        ]
      },
      {
        ChatId: 3,
        avatar: "latin_m",
        userName: "MrSmile",
        lastMessage: null,
        messages: [
          {
            who: "client",
            messageId: uuidv4(),
            Date: {
              Time: getCurrentDateTime().Time,
              Day: getCurrentDateTime().Day,
            },
            Text: "Are you available today?"
          },
          {
            who: "server",
            messageId: uuidv4(),
            Date: {
              Time: getCurrentDateTime().Time,
              Day: getCurrentDateTime().Day,
            },
            Text: "Yes, let's meet in the evening."
          }
        ]
      }
    ],
    selectedChatId: null, // ID вибраного чату
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, text } = action.payload;
      const newMessage = {
        who: "client",
        messageId: uuidv4(),
        Date: {
          Time: getCurrentDateTime().Time,
          Day: getCurrentDateTime().Day,
        },
        Text: text
      };
      const chat = state.chats.find(chat => chat.ChatId === chatId);
      if (chat) {
        chat.messages.push(newMessage);
        chat.lastMessage = newMessage; // Оновлюємо останнє повідомлення
      }
    },
    selectChat: (state, action) => {
      state.selectedChatId = action.payload;
    },
    createChat: (state, action) => {
      const newChat = {
        ChatId: uuidv4(),
        userName: action.payload.userName,
        avatar: "latin_" + action.payload.userName[0].toLowerCase(),
        lastMessage: null,
        messages: []
      };
      state.chats.push(newChat);
    },
    deleteChat: (state, action) => {
      state.chats = state.chats.filter(chat => chat.ChatId !== action.payload);
      if (state.selectedChatId === action.payload) {
        state.selectedChatId = null;
      }
    },
  },
});

export const { addMessage, selectChat, createChat, deleteChat } = chatSlice.actions;

export default chatSlice.reducer;
