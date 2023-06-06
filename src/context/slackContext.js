import React from 'react';
import { createContext, useState } from 'react';
import retrieveChannels from './retrieveChannels';
import sortFunction from './sortfunction';
import retrieveUsers from './retrieveUsers';

const SlackContext = createContext();

export const SlackProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [channel, setChannel] = useState([]);
  const [chosenChannel, setChosenChannel] = useState('');
  const [chosenTime, setChosenTime] = useState('');
  const [limit, setLimit] = useState('');
  async function topMessages(channel, token, cursor) {
    let allMessagesWithReactions = [];
    let verifier = true;
    let counter = 1;
    //this while loop gets the messages that have a reaction and store them in all messages
    while (verifier === true && counter != 2) {
      //Initial api call to get 100 messaged
      //console.log(counter, 'coiUNNTERRR')
      let message = await retrieveChannels(channel, token, cursor);
      //Filters through the 100 messages and only returns the messages with a reaction
      let messagesArr = message.messages.filter((mess) => mess.reactions);
      // adds all messages with a reaction together
      allMessagesWithReactions.push(...messagesArr);
      if (message.has_more) {
        cursor = message.response_metadata.next_cursor;
        counter += 1;
      } else {
        verifier = false;
      }
    }
    // let finalMessages = allMessagesWithReactions
    //   .sort((a, b) => {
    //     return b.reactions.length - a.reactions.length;
    //   })
    //   .slice(0, 3);
    let finalMessages = await allMessagesWithReactions
      .sort(sortFunction)
      .slice(0, 3);
    return finalMessages;
  }

  async function topThreeUsers(arrUsers) {
    let tempUser;
    const realUserNames = [];
    for (let i = 0; i < arrUsers.length; i++) {
      tempUser = await retrieveUsers(arrUsers[i].user);
      // console.log('api call works below');
      // console.log(tempUser);
      // console.log('api call works above');

      realUserNames.push(tempUser);
    }
    return realUserNames;
  }

  return (
    <SlackContext.Provider
      value={{
        messages,
        setMessages,
        topMessages,
        topUsers,
        setTopUsers,
        topThreeUsers,
        channel,
        setChannel,
        chosenChannel,
        setChosenChannel,
        chosenTime,
        setChosenTime,
        limit,
        setLimit,
      }}
    >
      {children}
    </SlackContext.Provider>
  );
};

export default SlackContext;
