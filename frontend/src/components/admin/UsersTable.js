import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CalculationsTable from './CalculationsTable';

const UsersTable = ({ data }) => {
    const token = useSelector((state) => state.login.user?.token);

    const [userId, setUserId] = useState(-1);
    const [calculationsFromApi, setCalculationsFromApi] = useState([]);
    const [showCalculations, setShowCalculations] = useState(false);

    const fetchCalculations = async (body) => {
        try {
            await fetch('http://127.0.0.1:8876/api/admin/search_user_by_id', {
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
                    setCalculationsFromApi(data);
                });
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        fetchCalculations({ id: userId });
    }, [userId]);

    useEffect(() => {
        // if (calculationsFromApi === 0 ) alert('This user has no calculations!');
        calculationsFromApi.length > 0 ?
            setShowCalculations(true) :
            setShowCalculations(false);
    }, [calculationsFromApi]);

    const handleClick = (id) => {
        setUserId(id);
        fetchCalculations({ id: id });
    }

    return (
        <>
            {(showCalculations ?
                <CalculationsTable calculationsFromApi={calculationsFromApi} onTableClick={() => setShowCalculations(false)} /> :
                (
                    <div className='container mt-3'>
                        <table class="table table-striped table-light table-hover">
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