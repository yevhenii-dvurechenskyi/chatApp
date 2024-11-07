import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice'; // Примерное действие для выхода
import { image } from '../assets/ImgImports';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user); // Предполагается, что у вас есть authSlice
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 border-b-2 border-gray-300">
      <div className="flex items-center">
        <img 
          src={image[user.avatar]} 
          alt="User Avatar" 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{user.name} {user.sername}</span>
        </div>
      </div>
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition duration-200"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default UserProfile;