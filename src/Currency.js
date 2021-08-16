import './index.css';
import DataFetch from './DataFetch';


function Currency (props) {
    
    return(
        <div>
            <ul>
                 {props.coins.map((coin) => {
                     const url = 'https://api.coingecko.com/api/v3/coins/' + coin + '?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';
                     return <li key={coin}>
                         <DataFetch url={url} />
                    </li>
                })} 
            </ul>
        </div>        
    );
}

export default Currency;