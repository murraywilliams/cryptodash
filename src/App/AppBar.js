import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElm = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

const toSentenceCase = lowerStr => {
  return lowerStr.charAt(0).toUpperCase() + lowerStr.substr(1);
};

const ControlButton = ({ name, active }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElm active={page === name} onClick={() => setPage(name)}>
          {toSentenceCase(name)}
        </ControlButtonElm>
      )}
    </AppContext.Consumer>
  );
};

export default () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name='dashboard' />
      <ControlButton name='settings' />
    </Bar>
  );
};
