import React from 'react';
import { useContext, useEffect } from 'react';
import SlackContext from '../context/slackContext';
import Cookies from 'universal-cookie';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Podium() {
  try {
    let navigate = useNavigate();
    const routeChange = () => {
      let path = '/podium';
      navigate(path);
    };
    // let channel = 'C04NDK3D5TJ';
    let token = '';

    const {
      chosenTime,
      setChosenTime,
      messages,
      channel,
      setMessages,
      topMessages,
      topUsers,
      setTopUsers,
      topThreeUsers,
    } = useContext(SlackContext);

    console.log('here', chosenTime);
    const handleChange = (event) => {
      console.log(event.target.value);
      setChosenTime(event.target.value);
    };
    async function fetchData(channel) {
      try {
        //TC MEMES CHANNEL
        //let channel = 'CPWS6PPDF';
        //TOP SLACK CHANNEL
        let channel = 'C05BA123AFQ';

        let token = '';
        let messages = await topMessages(channel, token);

        setMessages(messages);

        if (messages) {
          let finalNames = await topThreeUsers(messages);

          setTopUsers(finalNames);
        }
      } catch (error) {
        console.log('failed with', error);
      }
    }

    useEffect(
      (channel) => {
        fetchData(channel);
      },
      ['']
    );
    const imgChecker = (obj1) => {
      //console.log('hereeee', obj1);
      if (obj1.text.length > 1) {
        return obj1.text;
      } else {
        return <Link to={obj1.files[0].url_private}>'Image'</Link>;
      }
    };
    console.log('users', topUsers);
    console.log('messagesss', messages);
    if (topUsers.length > 2) {
      return (
        <div className="wholePodium">
          <h1>
            <div className="container podium">
              <div className="podium__item">
                <p className="podium__city">{topUsers[1].user.name}</p>
                <div className="podium__rank second">2</div>
                <div className="podium__city">{imgChecker(messages[1])}</div>
              </div>
              <div className="podium__item">
                <p className="podium__city">{topUsers[0].user.name}</p>
                <div className="podium__rank first">
                  <svg
                    className="podium__number"
                    viewBox="0 0 27.476 75.03"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(1, 0, 0, 1, 214.957736, -43.117417)">
                      <path
                        className="st8"
                        d="M -198.928 43.419 C -200.528 47.919 -203.528 51.819 -207.828 55.219 C -210.528 57.319 -213.028 58.819 -215.428 60.019 L -215.428 72.819 C -210.328 70.619 -205.628 67.819 -201.628 64.119 L -201.628 117.219 L -187.528 117.219 L -187.528 43.419 L -198.928 43.419 L -198.928 43.419 Z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="podium__city">{imgChecker(messages[0])}</div>
              </div>
              <div className="podium__item">
                <p className="podium__city">{topUsers[2].user.name}</p>
                <div className="podium__rank third">3</div>
                <div className="podium__city">{imgChecker(messages[2])}</div>
              </div>
            </div>
          </h1>
        </div>
      );
      //return <div>{<h1> {messages[1].user}</h1>}</div>;
    } else {
      return <div> LOADINGG.....</div>;
    }
  } catch (error) {
    console.log('FAILED WITH ' + error);
  }
}

export default Podium;
