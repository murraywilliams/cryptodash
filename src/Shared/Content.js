import React from 'react';
import { AppContext } from '../App/AppProvider';

export default ({ children }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <div> Loading Coins...</div>;
        }
        if (!firstVisit && !prices) {
          return <div> Loading Prices...</div>;
        }
        return <div> {children} </div>;
      }}
    </AppContext.Consumer>
  );
};
