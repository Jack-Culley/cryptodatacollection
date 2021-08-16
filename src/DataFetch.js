import React, {useState, useEffect} from 'react';
import './index.css';

function DataFetch ({url}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch(url) 
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw response;
        })
        .then(data => setData(data))
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []) 

    if(loading) return "Loading...";
    if(error) return "Error!";

    return(
                    <div className='coin-container'>
                        <div className='coin-title'>
                            {data.name}({data.symbol})
                        </div>
                        <div className='coin-info'>
                            <div className='coin-image'>
                                <img src={data.image.large} width='200px' height='200px'/>
                            </div>
                            <div className='coin-desc'>
                                Current Price: {data.market_data.current_price.usd}
                                Description: {data.description.en}
                            </div>
                        </div>
                    </div>    
    );
}

export default DataFetch;