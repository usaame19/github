import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div className="py-4 rounded-lg" style={ {backgroundColor: '#ddeff0', maxWidth: '25rem'}}>
      <input
        className="border rounded px-2 py-1 mr-2"
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
