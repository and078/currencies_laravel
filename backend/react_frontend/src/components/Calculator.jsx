import React, { useEffect, useState } from 'react';
import UserInput from './UserInput';
import axiosClient from '../axiosClient';
import { useStateContext } from '../contexts/ContextProvider';

const Calculator = () => {

    const delay = 600;

    const userDataForSendToAPI = {
        current_currency: '',
        value: 0.0,
    }

    const { token } = useStateContext();

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

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json, text-plain, */*",
        'Authorization': `Bearer ${token}`,
    }

    const fetchData = async (dataFromUser) => {

        axiosClient.post('/calculator', dataFromUser, headers)
            .then(data => {
                callSetsWithDataFromAPI(data.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        userDataForSendToAPI.current_currency = currencyNameToSend;
        userDataForSendToAPI.value = valueToSend;

        const debounceTimeout = setTimeout(() => {
            try {
                if (valueToSend) {
                    fetchData(userDataForSendToAPI);
                }
            }
            catch (e) {
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
                <h1 className='title'>Currencies Calculator</h1>
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
