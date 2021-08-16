import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './Input.js';
import Currency from './Currency.js';
import Nav from './Nav.js';


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
      <Currency coins={cryptocurrencies}/>
    </div>
  ); 
}

ReactDOM.render(<Index/>, document.getElementById('root'));
