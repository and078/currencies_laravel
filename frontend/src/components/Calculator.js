import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserInput from './UserInput';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const Calculator = () => {

    const token = useSelector((state) => state.login.user?.token);

    const userData = {
        current_currency: '',
        usd: '0',
        ron: '0',
        rub: '0',
        uah: '0',
        gbp: '0',
        eur: '0',
        mdl: '0',
    }

    const [usd, setUsd] = useState('');
    const [ron, setRon] = useState('');
    const [rub, setRub] = useState('');
    const [uah, setUah] = useState('');
    const [gbp, setGbp] = useState('');
    const [eur, setEur] = useState('');
    const [mdl, setMdl] = useState('');


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
                callSets(data);
            });
    }

    const callSets = (data) => {
        setUsd(data.usd);
        setRon(data.ron);
        setRub(data.rub);
        setUah(data.uah);
        setGbp(data.gbp);
        setEur(data.eur);
        setMdl(data.mdl);
    }

    const handleChange = (e) => {
        const currentCurrency = e.target.id;

        userData.current_currency = currentCurrency;

        userData[currentCurrency] = e.target.value;

        for (const [key, value] of Object.entries(userData)) {
            if (value === '') userData[key] = '0';
        }
        try {
            fetchData(userData);
        } catch (err) {
            console.log('error to fetch', err);
        }

    }

    return (
        <div className='container'>
            <h1 className='justify-content-center'>Currencies calculator</h1>
            <UserInput textValue={mdl} currencyName="mdl" onChange={handleChange} />
            <UserInput textValue={eur} currencyName="eur" onChange={handleChange} />
            <UserInput textValue={usd} currencyName="usd" onChange={handleChange} />
            <UserInput textValue={rub} currencyName="rub" onChange={handleChange} />
            <UserInput textValue={gbp} currencyName="gbp" onChange={handleChange} />
            <UserInput textValue={ron} currencyName="ron" onChange={handleChange} />
            <UserInput textValue={uah} currencyName="uah" onChange={handleChange} />
        </div>
    )
}

export default Calculator