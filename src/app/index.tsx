import React from 'react';
import logo from './logo.svg';
import './App.css';

import SingleLineText, { Props as TextProps } from 'src/components/atoms/SingleLineText';

const App = () => {
  const textProps: TextProps = {
    left: 100,
    top: 100,
    color: '#545454',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <SingleLineText {...textProps}>Learn React</SingleLineText>
        </a>
      </header>
    </div>
  );
};

export default App;
