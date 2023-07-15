import React, { useState } from 'react';
import axios from 'axios';

const GitHubUserFinder = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter GitHub username" value={username} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.name}</h2>
        </div>
      )}
    </div>
  );
};

export default GitHubUserFinder;
