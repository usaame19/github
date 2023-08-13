import React, { useState } from 'react';
import Search from './search';
import UserDetails from './userDetails'; 
import axios from 'axios';

const FetchData = () => {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserData(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#f2f9f9' }}>
      <div className="max-w-xl p-4  rounded-lg overflow-hidden shadow-md"style={{ backgroundColor: '#ddeff0' }}>
        <h1 className="text-center mb-4">GitHub User Search</h1>
        <Search onSearch={handleSearch} />
        <UserDetails userData={userData} />
      </div>
    </div>
  );
};

export default FetchData;
