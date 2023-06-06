import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>Welcome Home</div>
      <Link to={'/channel'}>Start Here</Link>
    </div>
  );
};

export default Home;
