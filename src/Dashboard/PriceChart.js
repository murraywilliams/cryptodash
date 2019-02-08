import React from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import highchartsTheme from './HightchartsTheme';
ReactHighcharts.Highcharts.setOptions(highchartsTheme);

export default () => {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighcharts config={highchartsConfig(historical)} />
          ) : (
            <div> Loading Price Chart... </div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
};
