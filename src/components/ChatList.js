import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectChat, createChat, deleteChat } from '../features/chat/chatSlice';
import { image } from '../assets/ImgImports';

const ChatList = () => {
  const chats = useSelector((state) => state.chat.chats);
  const selectedChatId = useSelector((state) => state.chat.selectedChatId);
  const dispatch = useDispatch();
  
  const [isModalOpen, setModalOpen] = useState(false); // Стан для відкриття модального вікна
  const [chatName, setChatName] = useState(''); // Стан для імені нового чату

  const onChatSelect = (chatId) => {
    dispatch(selectChat(chatId));
  };

  const onDeleteChat = (chatId) => {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      dispatch(deleteChat(chatId));
    }
  };

  const handleCreateChat = () => {
    if (chatName.trim()) {
      dispatch(createChat({ userName: chatName }));
      setChatName('');
      setModalOpen(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 flex justify-between items-center p-4">
        <span className="text-xl font-bold text-white">Chats</span>
        <button 
          className="bg-white text-blue-600 px-4 py-2 rounded-full border border-gray-400 hover:bg-blue-50 flex items-center"
          onClick={() => setModalOpen(true)}
        >
          Create Chat
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div 
            key={chat.ChatId} 
            className={`flex items-center p-4 hover:bg-gray-100 border-b border-gray-200 cursor-pointer ${selectedChatId === chat.ChatId ? 'bg-gray-200' : ''}`}
            onClick={() => onChatSelect(chat.ChatId)}
          >
            <img
              src={image[chat.avatar] !== undefined ? image[chat.avatar] : image.mystery} // Замініть на правильний шлях до аватарок
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-semibold">{chat.userName}</span>
                <span className="text-gray-500 text-sm">
                  {chat.lastMessage ? `${chat.lastMessage.Date.Day} ${chat.lastMessage.Date.Time}` : ''}
                </span>
              </div>
              <p className="text-gray-600 text-sm truncate">
                {chat.lastMessage ? chat.lastMessage.Text : 'No messages yet'}
              </p>
            </div>
            <button 
              className="text-red-500 hover:underline ml-4"
              onClick={(e) => {
                e.stopPropagation(); // Щоб не вибирати чат при натисканні на кнопку
                onDeleteChat(chat.ChatId);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Модальне вікно для створення нового чату */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create New Chat</h2>
            <input 
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={chatName}
              onChange={(e) => setChatName(e.target.value)}
              placeholder="Enter chat name"
            />
            <div className="flex justify-end space-x-4">
              <button 
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCreateChat}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
