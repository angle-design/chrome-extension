import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/app.js';

chrome.storage.local.get('state', (obj) => {
  ReactDOM.render(
    <Root />,
    document.querySelector('#root')
  );
});
