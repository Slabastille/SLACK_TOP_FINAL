import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>
        <div>Welcome Home</div>
      </h1>
      <Link to={'/channel'}>Start Here</Link>
    </div>
  );
};

export default Home;
