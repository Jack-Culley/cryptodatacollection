import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './Input.js';
import Currency from './Currency.js';
import Nav from './Nav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataFetch from './DataFetch.js';


function Index() {
  const [cryptocurrencies, setCoins] = useState([]);

  const addCurrency = (coin) => {
    const coins = [...cryptocurrencies, coin];
    setCoins(coins);
  }

  return (
    <div>
      <App />
      <Nav />
      <Input addCurrency={addCurrency}/>
      <Router>
        <Switch>
          <Route path="/" component={} />
          <Route path="/bitcoin" render={() => (<DataFetch url='https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'/>)}/>
        </Switch>
      </Router>
      <Currency coins={cryptocurrencies}/>
    </div>
  ); 
}

ReactDOM.render(<Index/>, document.getElementById('root'));
