import React, { useState } from 'react'
import UserInput from './components/UserInput';

function App() {

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


  const fetchData = async (dataFromUser, currentId) => {

    await fetch('http://127.0.0.1:8000/api/calculator', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text-plain, */*",
      },
      body: JSON.stringify(dataFromUser)
    })
      .then(res => res.json())
      .then(data => {

      //   const setCalls = {
      //     usd: () => {setUsd(data.usd); console.log(data.usd)},
      //     ron: () => {setRon(data.ron); console.log(data.ron)},
      //     rub: () => {setRub(data.rub); console.log(data.rub)},
      //     uah: () => {setUah(data.uah); console.log(data.uah)},
      //     gbp: () => {setGbp(data.gbp); console.log(data.gbp)},
      //     eur: () => {setEur(data.eur); console.log(data.eur)},
      //     mdl: () => {setMdl(data.mdl); console.log(data.mdl)},
      //   }
      //   // Object.keys(setCalls).forEach(el => console.log(typeof(el)))

      //   for(const key in setCalls) {
      //     if (key !== currentId) {
      //       setCalls[key]();
      //       console.log(key);
      //     }
      //   }
      //   console.log(data);
        setUsd(data.usd);
        setRon(data.ron);
        setRub(data.rub);
        setUah(data.uah);
        setGbp(data.gbp);
        setEur(data.eur);
        setMdl(data.mdl);
      });
  }

  const handleChange = (e) => {
    const currentCurrency = e.target.id
    userData.current_currency = currentCurrency;
    userData[currentCurrency] = e.target.value;
    fetchData(userData, e.target.id);
  }

  return (
    <div className='container'>
      <UserInput textValue={usd} currencyName="usd" onChange={handleChange} />
      <UserInput textValue={ron} currencyName="ron" onChange={handleChange} />
      <UserInput textValue={rub} currencyName="rub" onChange={handleChange} />
      <UserInput textValue={uah} currencyName="uah" onChange={handleChange} />
      <UserInput textValue={gbp} currencyName="gbp" onChange={handleChange} />
      <UserInput textValue={eur} currencyName="eur" onChange={handleChange} />
      <UserInput textValue={mdl} currencyName="mdl" onChange={handleChange} />
    </div>
  );
}
export default App;
