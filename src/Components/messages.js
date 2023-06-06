import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import SlackContext from '../context/slackContext';

function Messages() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/time';
    navigate(path);
  };
  const { limit, setLimit } = useContext(SlackContext);

  console.log('here', limit);
  const handleChange = (event) => {
    console.log(event.target.value);
    setLimit(event.target.value);
  };

  return (
    <div>
      <h2>MESSAGES</h2>

      <div>
        <h3>How many messages are we looking through</h3>
        <select value={limit} onChange={handleChange}>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="All">ALL TIME</option>
        </select>
      </div>
      <div> - </div>
      <button onClick={routeChange}> Submit </button>
    </div>
  );
}

export default Messages;
