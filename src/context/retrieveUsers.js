import React from 'react';
import axios from 'axios';
import qs from 'qs';
const apiUrl = 'https://slack.com/api';

const retrieveUsers = async (user, token = '') => {
  let messageArgs = {
    user: user,
    token: token,
  };
  const result = await axios.post(
    `${apiUrl}/users.info?`,
    qs.stringify(messageArgs)
  );
  // console.log('api before');
  // console.log(result);
  // console.log('api after');

  return result.data;
};

export default retrieveUsers;
