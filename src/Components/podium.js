import React from 'react';
import { useContext, useEffect } from 'react';
// import SlackContext from '../context/slackContext';

function Podium() {
  //   const {
  //     messages,
  //     setMessages,
  //     topMessages,
  //     topUsers,
  //     setTopUsers,
  //     topThreeUsers,
  //   } = useContext(SlackContext);

  //   async function fetchData() {
  //     try {
  //       let channel = 'C04NDK3D5TJ';
  //       let token =
  //         '';
  //       let messages = await topMessages(channel, token);

  //       setMessages(messages);

  //       if (messages) {
  //         let finalNames = await topThreeUsers(messages);

  //         setTopUsers(finalNames);
  //       }
  //     } catch (error) {
  //       console.log('failed with', error);
  //     }
  //   }

  //   let channel = 'C04NDK3D5TJ';

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //   // console.log(messages);
  //   if (messages) {
  //     <div> HELLOOOOO</div>;
  //     //return <div>{<h1> {messages[1].user}</h1>}</div>;
  //   } else {
  //     <div> LOADINGG.....</div>;
  //   }
  return <div>PODIUM</div>;
}

export default Podium;
