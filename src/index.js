import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Index() {

  return (
    <div>
      <App />
      <nav>
        <ul>
          <li>Bitcoin</li>
        </ul>
      </nav>
    </div>
  ); 
}

ReactDOM.render(<Index/>, document.getElementById('root'));
