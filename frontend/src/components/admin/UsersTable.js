import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CalculationsTable from './CalculationsTable';

const UsersTable = ({ data }) => {
    const token = useSelector((state) => state.login.user?.token);

    const [userId, setUserId] = useState(-1);
    const [calculationsFromApi, setCalculationsFromApi] = useState([]);
    const [showCalculations, setShowCalculations] = useState(false);

    const fetchCalculations = async (body) => {
        await fetch('http://127.0.0.1:8000/api/admin/search_user_by_id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCalculationsFromApi(data);
            });
    }

    useEffect(() => {
        console.log(userId);
        fetchCalculations({ id: userId });
    }, [userId]);

    useEffect(() => {
        calculationsFromApi.length > 0 ? 
            setShowCalculations(true) :
            setShowCalculations(false);
    }, [calculationsFromApi]);


    return (
        <>
            {(showCalculations ?
                <CalculationsTable calculationsFromApi={calculationsFromApi} onTableClick={() => setShowCalculations(false)}/> :
                (
                    <div className='container mt-3'>
                        <table class="table table-striped table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => (
                                        <tr key={item.id} onClick={() => setUserId(item.id)}>
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