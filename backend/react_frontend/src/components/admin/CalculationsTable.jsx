import React from 'react'
import { formatDate } from '../../helpers/timeFormatter'

const CalculationsTable = ( {calculationsFromApi, onTableClick} ) => {
if(!calculationsFromApi){
}
    return (
        <>
            <div className='container mt-3'>
                <table className="table table-striped table-light table-hover"  onClick={onTableClick}>
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

export default CalculationsTable