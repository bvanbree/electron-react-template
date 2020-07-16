import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

fetch('data/preferences.json') // load example data file preferences.json
  .then((r) => r.json())
  .then((prefs) => {

    // load any additional JSON data here,
    // then pass that data to the App as props
    ReactDOM.render(
      <App
        preferences={prefs}
      />,
      document.getElementById('Root'));

  }).catch(err => console.error('Error loading preferences: ' + err));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
