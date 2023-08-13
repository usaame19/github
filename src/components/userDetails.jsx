import React from 'react';

const UserDetails = ({ userData }) => {
  return (
    <div className="py-4">
      {userData ? (
       <div className="max-w-xl rounded-lg overflow-hidden shadow-md" style={{ maxWidth: '25rem', backgroundColor: '#ddeff0' }}>
          <div className="p-6">
            <div className="flex items-center justify-center">
              <img
                className="w-32 h-32 rounded-full"
                src={userData.avatar_url}
                alt="Profile"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mt-4">
              {userData.login}
            </h2>
            <div className="font-semibold mt-4 flex flex-col items-center">
              <p className="text-sm text-gray-600 flex items-center">
                <span className="mr-2">Followers:</span>
                {userData.followers}
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="mr-2">Following:</span>
                {userData.following}
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="mr-2">Repositories:</span>
                {userData.public_repos}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UserDetails;
