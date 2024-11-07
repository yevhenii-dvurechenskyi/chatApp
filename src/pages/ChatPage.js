import React from 'react';
import ChatList from '../components/ChatList';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import UserProfile from '../components/UserProfile';

const ChatPage = () => {
    return (
        <div className="flex h-screen">
            {/* Ліва частина, що займає 30% ширини екрану */}
            <div className="w-[30%] flex flex-col h-full bg-gray-100 shadow-lg border-r border-gray-300">
                <UserProfile />
                <ChatList />
            </div>

            {/* Права частина, що займає 70% ширини екрану */}
            <div className="w-[70%] flex flex-col h-full">
                <MessageList className="flex-1" />
                <MessageInput />
            </div>
        </div>
    );
};

export default ChatPage;