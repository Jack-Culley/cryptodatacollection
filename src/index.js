import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import useDataFetch from './useDataFetch';

function Index() {

  return (
    <div>
      <App />
        {useDataFetch('https://api.coingecko.com/api/v3/coins/juggernaut?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')}
    </div>
  ); 
}

ReactDOM.render(<Index/>, document.getElementById('root'));
