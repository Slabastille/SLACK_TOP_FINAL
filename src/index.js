import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { HashRouter } from 'react-router-dom';

render(
  <HashRouter>
    <App />,
  </HashRouter>,
  document.querySelector('#root')
);
