import React, {useState} from 'react';
import './index.css';

function Input ({addCurrency}) {
    const [currency, setCurrency] = useState('');

    const handleSubmit = (e) => {
        addCurrency(currency);
        e.preventDefault();
    }

    return(
        <form onSubmit={e => {handleSubmit(e)}}>
            <div className='input'>
                <input name='currency' type='text' value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder='Currency(separate with "-"'/>
            </div>
            
                <input className='submit-button' type='submit' value='Add Currency'/>
            
        </form>
    );
}

export default Input;