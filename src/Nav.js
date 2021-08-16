import './index.css';

function Nav () {

    return(
        <nav>
            <ul>
                <li>
                    <a href='https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'>
                        Bitcoin
                    </a>
                </li>
                <li>
                    <a href='https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'>
                        Ethereum
                    </a>
                </li>
                <li>
                    <a href='https://api.coingecko.com/api/v3/coins/polygon?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'>
                        Polygon
                    </a>
                </li>
                <li>
                    <a href='https://api.coingecko.com/api/v3/coins/juggernaut?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'>
                        Juggernaut
                    </a>
                </li>
                <li>
                    <a href='https://api.coingecko.com/api/v3/coins/chainlink?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'>
                        Chainlink
                    </a>
                </li>
                <li>
                    <a href='https://api.coingecko.com/api/v3/coins/band-protocol?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'>
                        Band Protocol
                    </a>
                </li>
                <li>
                    <a href='https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'>
                        Cardano
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;