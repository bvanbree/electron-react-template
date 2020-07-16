import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='App' >
        <h1>Electron + React</h1>
      </div >
    );
  }
}

App.propTypes = {
  preferences: PropTypes.object
};

export default App;

