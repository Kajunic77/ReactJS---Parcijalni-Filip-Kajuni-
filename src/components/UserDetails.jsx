import React from "react";
import { Link } from "react-router-dom";

const UserDetails = ({ userData, repos, handleReset }) => {
  return (
    <div className="flex-col items-center mx-20 border-black border-2 bg-slate-400 rounded-3xl mt-4">
      <h2 className="m-4 text-3xl">User Details:</h2>
      <div className="flex justify-center mb-6">
        <Link to={userData.html_url} target="blank">
          <img
            className="border-black border-2 rounded-full size-60"
            src={userData.avatar_url}
            alt="User Avatar"
          />
        </Link>
      </div>
      <div className="mb-6">
        <div className="flex justify-center gap-4 mb-2">
          <h3 className="text-2xl">Username:</h3>
          <Link to={userData.html_url} target="blank">
            <p className="text-lg pt-1 no-underline hover:underline">
              {userData.name}
            </p>
          </Link>
        </div>
        <div className="flex justify-center gap-4 mb-2">
          <h3 className="text-2xl">Location:</h3>
          <p className="text-lg pt-1">{userData.location}</p>
        </div>
        <div className="flex justify-center gap-4 ">
          <h3 className="text-2xl">Bio:</h3>
          <p className="text-lg pt-1">{userData.bio}</p>
        </div>
      </div>

      <h3 className="text-2xl mb-2">Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default UserDetails;
