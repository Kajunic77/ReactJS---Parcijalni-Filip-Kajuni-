import { useState } from "react";
import UserDetails from "./UserDetails";

const UserSearch = () => {
  const [text, setText] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a correct username");
    } else {
      try {
        const userRes = await fetch(`https://api.github.com/users/${text}`);
        const userData = await userRes.json();
        setUserData(userData);

        const reposRes = await fetch(userData.repos_url);
        const reposData = await reposRes.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
      setText("");
    }
  };

  const handleReset = () => {
    setUserData(null);
    setRepos([]);
  };

  return (
    <div className="flex flex-col text-center font-bold">
      <div className="">
        <form className="flex justify-center gap-2" onSubmit={handleSubmit}>
          <input
            className="border-2 border-black rounded-2xl px-2 py-1"
            type="text"
            placeholder="Enter username..."
            onChange={handleChange}
            value={text}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Search
          </button>
        </form>
      </div>
      {userData && (
        <UserDetails
          userData={userData}
          repos={repos}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};

export default UserSearch;
