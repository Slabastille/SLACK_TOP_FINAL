import React from 'react';
import { useNavigate } from 'react-router-dom';

function Messages() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/time';
    navigate(path);
  };
  return (
    <div>
      <h2>MESSAGES</h2>

      <div>
        <h3>How many messages are we looking through</h3>
        <select>
          <option value="id1">50</option>
          <option value="id2">100</option>
          <option value="id3">ALL TIME</option>
        </select>
      </div>
      <div> - </div>
      <button onClick={routeChange}> Submit </button>
    </div>
  );
}

export default Messages;
