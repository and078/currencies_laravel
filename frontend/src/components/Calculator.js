import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserInput from './UserInput';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Calculator = () => {
    // console.log('calculator render');

    const token = useSelector((state) => state.login.user?.token);

    const delay = 500;

    const userDataForSendToAPI = {
        current_currency: '',
        value: 0.0,
    }

    const [currencyNameToSend, setCurrencyNameToSend] = useState('');
    const [valueToSend, setValueToSend] = useState(0.0);

    const [usd, setUsd] = useState('');
    const [ron, setRon] = useState('');
    const [rub, setRub] = useState('');
    const [uah, setUah] = useState('');
    const [gbp, setGbp] = useState('');
    const [eur, setEur] = useState('');
    const [mdl, setMdl] = useState('');

    const setsForSendToAPI = {
        'usd': setUsd,
        'ron': setRon,
        'rub': setRub,
        'uah': setUah,
        'gbp': setGbp,
        'eur': setEur,
        'mdl': setMdl,
    }

    const callSetsWithDataFromAPI = (data) => {
        setUsd(data.usd);
        setRon(data.ron);
        setRub(data.rub);
        setUah(data.uah);
        setGbp(data.gbp);
        setEur(data.eur);
        setMdl(data.mdl);
    }

    const fetchData = async (dataFromUser) => {
        await fetch('http://127.0.0.1:8000/api/calculator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(dataFromUser)
        })
            .then(res => res.json())
            .then(data => {
                callSetsWithDataFromAPI(data);
            });
    }

    useEffect(() => {
        userDataForSendToAPI.current_currency = currencyNameToSend;
        userDataForSendToAPI.value = valueToSend;

        const debounceTimeout = setTimeout(() => {
            try {
                if(valueToSend) {
                    fetchData(userDataForSendToAPI);
                }
            }
            catch(e) {
                console.log(e);
            }
            
        }, delay);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [valueToSend]);

    const handleInput = (e) => {
        e.preventDefault();
        const currentCurrency = e.target.id;
        const inputString = e.target.value
        const floatInputValue = parseFloat(inputString);

        setsForSendToAPI[currentCurrency](inputString);
        
        setCurrencyNameToSend(currentCurrency);
        setValueToSend(floatInputValue);
    }

    return (
        <>
            <div className='container'>
                <h1 className='justify-content-center'>Currencies calculator</h1>
                <UserInput textValue={mdl} currencyName="mdl" onInput={handleInput} /> 
                <UserInput textValue={eur} currencyName="eur" onInput={handleInput} /> 
                <UserInput textValue={usd} currencyName="usd" onInput={handleInput} /> 
                <UserInput textValue={rub} currencyName="rub" onInput={handleInput} /> 
                <UserInput textValue={gbp} currencyName="gbp" onInput={handleInput} /> 
                <UserInput textValue={ron} currencyName="ron" onInput={handleInput} /> 
                <UserInput textValue={uah} currencyName="uah" onInput={handleInput} /> 
            </div>
        </>

    )
}

export default Calculator