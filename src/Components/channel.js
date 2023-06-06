import React from 'react';
import Messages from './messages';
import { Link } from 'react-router-dom';
// import SlackContext from '../context/slackContext';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Channel() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/messages';
    navigate(path);
  };
  //   const { channel, setChannel } = useContext(SlackContext);
  //   function Redirect() {
  //     "location.href='/Podium'";
  //   }
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
        <select>
          <option value="id1">General</option>
          <option value="id2">TC_MEMES</option>
          <option value="id3">INSERT CUSTOM CHANNEL HERE</option>
        </select>
      </div>
      <div> - </div>
      <button onClick={routeChange}> Submit </button>
    </div>
  );
}

export default Channel;
