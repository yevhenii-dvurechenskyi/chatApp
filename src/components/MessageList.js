import React from 'react';
import { useSelector } from 'react-redux';

const MessageList = () => {
  const chatId = useSelector((state) => state.chat.selectedChatId);
  const messages = useSelector((state) => state.chat.chats.find(chat => chat.ChatId === chatId)?.messages || []);

  return (
    <div className="flex flex-col flex-1 p-4 bg-white border border-gray-300 shadow-lg overflow-y-auto custom-scrollbar">
      <div className='flex flex-col space-y-4 p-4 bg-slate-100 rounded-lg'>
        {messages.map((message) => (
          <div 
            key={message.messageId}
            className={`max-w-lg p-3 rounded-lg shadow-md mb-2 ${message.who === 'client' ? 'self-start bg-blue-100' : 'self-end bg-gray-200'}`}
          >
            <div className="text-xs text-gray-500 mb-1">{message.Date.Day} {message.Date.Time}</div>
            <p className="text-gray-800 text-base">{message.Text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
