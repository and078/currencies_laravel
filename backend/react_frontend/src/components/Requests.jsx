import React, { useEffect, useRef, useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { formatDate } from '../helpers/timeFormatter'
import axiosClient from '../axiosClient';

const Requests = () => {

    const [calculationsFromApi, setCalculationsFromApi] = useState([]);
    const { user, token } = useStateContext();

    const payload = {
        id: user.id,
    }

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json, text-plain, */*",
        'Authorization': `Bearer ${token}`,
    }

    useEffect(() => {
        if (!!user?.id && !!token) {
            axiosClient.post('/requests', payload, headers)
                .then(({ data }) => {
                    setCalculationsFromApi(data);
                })
                .catch(err => console.log(err));
        }
    }, [user])

    return (
        <>
            <div className='container mt-3'>
                <table className="table table-striped table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Currency</th>
                            <th scope="col">USD</th>
                            <th scope="col">RON</th>
                            <th scope="col">RUB</th>
                            <th scope="col">UAH</th>
                            <th scope="col">GBP</th>
                            <th scope="col">EUR</th>
                            <th scope="col">MDL</th>
                            <th scope="col">Created date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            calculationsFromApi.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.current_currency}</td>
                                    <td>{item.usd}</td>
                                    <td>{item.ron}</td>
                                    <td>{item.rub}</td>
                                    <td>{item.uah}</td>
                                    <td>{item.gbp}</td>
                                    <td>{item.eur}</td>
                                    <td>{item.mdl}</td>
                                    <td>{formatDate(item.created_at)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Requests
