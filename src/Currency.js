import './index.css';
import DataFetch from './useDataFetch';


function Currency (props) {
    return(
        <div>
            <ul>
                 {props.coina.map((v, i) => {
                     return <li>
                         {DataFetch('https://api.coingecko.com/api/v3/coins/' + v + '?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')}
                         </li>
                })} 
            </ul>
        </div>        
    );
}

export default Currency;