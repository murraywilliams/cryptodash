import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import WelcomeMessage from './WelcomeMessage';

const MyButton = styled.div`
  color: green;
`;

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />;
      </div>
    );
  }
}

export default App;
