import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { Tile, SelectedTile } from '../Shared/Tile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

export default () => {
  return (
    <AppContext>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map(coinKey => (
            <SelectedTile>{coinKey}</SelectedTile>
          ))}
        </CoinGridStyled>
      )}
    </AppContext>
  );
};
