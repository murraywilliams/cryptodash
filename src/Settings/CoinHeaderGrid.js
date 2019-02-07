import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from '../Shared/Tile';

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;
// Styled components allows styles for specific component
// only when hovered over
const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default ({ name, symbol, topSection }) => {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon> X </DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
};
