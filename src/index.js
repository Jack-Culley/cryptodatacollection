import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './Input.js';
import Currency from './Currency.js';


function Index() {
  const [cryptocurrencies, setCoins] = useState([]);

  const addCurrency = (coin) => {
    const coins = [...cryptocurrencies, coin];
    setCoins(coins);
  }

  return (
    <div>
      <App />
      <Input addCurrency={addCurrency}/>
      <Currency coina={cryptocurrencies}/>
    </div>
  ); 
}

ReactDOM.render(<Index/>, document.getElementById('root'));
