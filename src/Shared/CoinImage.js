import React from 'react';

export default ({ coin, style }) => {
  return (
    <img
      alt={coin.CoinSymbol}
      style={style || { height: '50px' }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};
