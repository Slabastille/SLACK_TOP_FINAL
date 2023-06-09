import React from 'react';
import { useContext, useEffect } from 'react';
import SlackContext from '../context/slackContext';

function Time() {
  return (
    <div>
      <h2>TIME RANGE</h2>

      <div>
        <h3>What is the time range that we are using</h3>
        <select value={chosenTime} onChange={handleChange}>
          <option value="id1">Today Only</option>
          <option value="id2">Last 7 Days </option>
          <option value="id3">Last 30 Days</option>
          <option value="id3">Last 90 Days</option>
        </select>
      </div>
      <div> - </div>
      <button onClick={routeChange}> Submit </button>
    </div>
  );
}

export default Time;
