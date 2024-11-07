import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/search/searchSlice';

const ChatSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term)); // Оновлюємо стан пошуку в Redux
  };

  return (
    <div className="p-2">
      <input 
        type="text"
        onChange={handleSearch}
        placeholder="Search chat..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default ChatSearch;