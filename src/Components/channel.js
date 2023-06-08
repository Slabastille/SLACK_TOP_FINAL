import React from 'react';
import Messages from './messages';
import { Link } from 'react-router-dom';
// import SlackContext from '../context/slackContext';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import SlackContext from '../context/slackContext';
import { useState } from 'react';

function Channel() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/podium';
    navigate(path);
  };

  const { chosenChannel, setChosenChannel } = useContext(SlackContext);

  console.log('here', chosenChannel);
  const handleChange = (event) => {
    console.log(event.target.value);
    setChosenChannel(event.target.value);
  };
  return (
    <div>
      {/* Channel info here is going to be static
    Ask Patrick which channels we can get access to
    Create channel here for the demo too
    send channel ID over to messages component
     */}
      <h1> CHANNEL</h1>
      <h3>Select your channel here</h3>
      {/* <button type="submit" href="/podium">
        BUTTON
      </button>
      <a href="/Podium">HERE</a> */}

      <div>
        <h4>What channel will you be selecting</h4>
        <select value={chosenChannel} onChange={handleChange}>
          <option value="CPWS6PPDF">TC_MEMES</option>
          <option value="C05BA123AFQ">TopSlack</option>
        </select>
      </div>
      <div> - </div>
      <button onClick={routeChange}> Submit </button>
    </div>
  );
}

export default Channel;
