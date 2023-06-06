import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import SlackContext from '../context/slackContext';

function Time() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/podium';
    navigate(path);
  };
  let channel = 'C04NDK3D5TJ';
  let token =
    'xoxp-4737822716051-4750575042113-5011075954039-daf26b28d7a980b3c772121446cfa47b';

  const { chosenTime, setChosenTime } = useContext(SlackContext);

  console.log('here', chosenTime);
  const handleChange = (event) => {
    console.log(event.target.value);
    setChosenTime(event.target.value);
  };
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
