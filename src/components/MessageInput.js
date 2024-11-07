import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../features/chat/chatSlice';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const selectedChatId = useSelector((state) => state.chat.selectedChatId);

  const handleSubmit = () => {
    if (message.trim() && selectedChatId) {
      dispatch(addMessage({
        chatId: selectedChatId,
        text: message,
      }));
      setMessage(''); // Очищення поля після відправки
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex p-4 border-t border-gray-300 bg-gray-50">
      <input 
        type="text" 
        className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Додаємо обробник події
        placeholder="Enter your message..."
      />
      <button 
        className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-200"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
