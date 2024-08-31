import React, { useState } from 'react'
import CalculationsTable from './CalculationsTable';
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axiosClient';

const UsersTable = ({ usersFromApi }) => {

    const { token } = useStateContext();
    const [calculationsFromApi, setCalculationsFromApi] = useState([]);
    const [showCalculations, setShowCalculations] = useState(false);

    const headers = {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization': `Bearer ${token}`,
    }

    const fetchCalculations = (payload) => {
        axiosClient.post('admin/search_user_by_id', payload, headers)
            .then(data => {
                setCalculationsFromApi(data.data);
                if (data.data.length === 0) {
                    alert(`This user has no data`);
                }
                showResults(data.data);
                // console.log(data.data);
            })
            .catch(err => { console.log(err) });
    }

    const showResults = (calculationsFromApi) => {
        if (calculationsFromApi.length > 0) {
            setShowCalculations(true);
        } else {
            setShowCalculations(false);
        }
    }

    const handleClick = (id) => {
        fetchCalculations({ id: id });
    }

    return (
        <>
            {(showCalculations ?
                <CalculationsTable calculationsFromApi={calculationsFromApi} onTableClick={() => setShowCalculations(false)} /> :
                (
                    <div className='container mt-3'>
                        <table className="table table-striped table-light table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usersFromApi.map(item => (
                                        <tr key={item.id} onClick={() => handleClick(item.id)}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            )}

        </>
    )
}

export default UsersTable
