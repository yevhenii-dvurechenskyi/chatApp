import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const getCurrentDateTime = () => {
  const now = new Date();
  return {
    Time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    Day: now.toLocaleDateString(),
  };
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messagesByChatId: {
      1: [
        {
          who: "client",
          messageId: uuidv4(),
          Date: getCurrentDateTime(),
          Text: "Hello my dear friend!"
        },
        {
          who: "server",
          messageId: uuidv4(),
          Date: getCurrentDateTime(),
          Text: "Hi bro)"
        }
      ],
      2: [
        {
          who: "client",
          messageId: uuidv4(),
          Date: getCurrentDateTime(),
          Text: "Good morning!"
        },
        {
          who: "server",
          messageId: uuidv4(),
          Date: getCurrentDateTime(),
          Text: "Good morning, how are you?"
        }
      ],
      3: [
        {
          who: "client",
          messageId: uuidv4(),
          Date: getCurrentDateTime(),
          Text: "Are you available today?"
        },
        {
          who: "server",
          messageId: uuidv4(),
          Date: getCurrentDateTime(),
          Text: "Yes, let's meet in the evening."
        }
      ],
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, text } = action.payload;
      const newMessage = {
        who: "client",
        messageId: uuidv4(),
        Date: getCurrentDateTime(),
        Text: text
      };
      console.log(`Adding message to chat ${chatId}:`, newMessage); // Додаємо лог
      if (state.messagesByChatId[chatId]) {
        state.messagesByChatId[chatId].push(newMessage);
      } else {
        state.messagesByChatId[chatId] = [newMessage];
      }
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
