import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';

const MyButton = styled.div`
  color: green;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <Content>
            <AppBar />
            <Settings />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
