import React, {useState, useEffect} from 'react';
import './index.css';

function DataFetch (url) {
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
        <div>
            <ul>
                <li>{data.name}{data.description.en}{data.market_data.current_price.usd}</li>
            </ul>
        </div>
    );
}

export default DataFetch;