import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './ApLayout';

const MyButton = styled.div`
  color: green;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
