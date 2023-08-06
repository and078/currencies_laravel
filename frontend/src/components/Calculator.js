import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserInput from './UserInput';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const Calculator = () => {

    const token = useSelector((state) => state.login.user?.token);

    const delay = 500;

    const userDataForSendToAPI = {
        current_currency: '',
        usd: '0',
        ron: '0',
        rub: '0',
        uah: '0',
        gbp: '0',
        eur: '0',
        mdl: '0',
    }

    const [dataToSend, setDataToSend] = useState(userDataForSendToAPI);

    const [usd, setUsd] = useState('');
    const [ron, setRon] = useState('');
    const [rub, setRub] = useState('');
    const [uah, setUah] = useState('');
    const [gbp, setGbp] = useState('');
    const [eur, setEur] = useState('');
    const [mdl, setMdl] = useState('');

    const callSetsWithDataFromAPI = (data) => {
        setUsd(data.usd);
        setRon(data.ron);
        setRub(data.rub);
        setUah(data.uah);
        setGbp(data.gbp);
        setEur(data.eur);
        setMdl(data.mdl);
    }

    const setsForSendToAPI = {
        'usd': setUsd,
        'ron': setRon,
        'rub': setRub,
        'uah': setUah,
        'gbp': setGbp,
        'eur': setEur,
        'mdl': setMdl,
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
        const debounceTimeout = setTimeout(() => {
            fetchData(dataToSend);
          }, delay);
      
          return () => {
            clearTimeout(debounceTimeout);
          };
    }, [dataToSend]);

    const handleInput = (e) => {
        const currenCurrency = e.target.id;
        let currentInputString = e.target.value;

        userDataForSendToAPI.current_currency = currenCurrency;
        setsForSendToAPI[currenCurrency](currentInputString);
        userDataForSendToAPI[currenCurrency] = currentInputString;

        for (const [key, value] of Object.entries(userDataForSendToAPI)) {
            if (value === '') userDataForSendToAPI[key] = '0';
        }

        setDataToSend(userDataForSendToAPI);
    }

    const handleFocus = (e) => {
        const currency = e.target.id;
        setsForSendToAPI[currency]('');
    }

    return (
        <div className='container'>
            <h1 className='justify-content-center'>Currencies calculator</h1>
            <UserInput textValue={mdl} currencyName="mdl" onInput={handleInput} onFocus={handleFocus}/>
            <UserInput textValue={eur} currencyName="eur" onInput={handleInput} onFocus={handleFocus}/>
            <UserInput textValue={usd} currencyName="usd" onInput={handleInput} onFocus={handleFocus}/>
            <UserInput textValue={rub} currencyName="rub" onInput={handleInput} onFocus={handleFocus}/>
            <UserInput textValue={gbp} currencyName="gbp" onInput={handleInput} onFocus={handleFocus}/>
            <UserInput textValue={ron} currencyName="ron" onInput={handleInput} onFocus={handleFocus}/>
            <UserInput textValue={uah} currencyName="uah" onInput={handleInput} onFocus={handleFocus}/>
        </div>
    )
}

export default Calculator