import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersTable from './UsersTable';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const AdminPanel = () => {
    const token = useSelector((state) => state.login.user?.token);

    const [userName, setUserName] = useState('');
    const [usersFromApi, setUsersFromApi] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const delay = 500;

    const fetchUsers = async (body) => {
        await fetch('http://127.0.0.1:8000/api/admin/search_user', {
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
                setUsersFromApi(data);
            });
    }

    useEffect(() => {
        setUsersFromApi([]);
        const debounceTimeout = setTimeout(() => {
            try {
                if(!!userName) {
                    fetchUsers({user_name: userName});
                }
            }
            catch(e) {
                console.log(e);
            }
            
        }, delay);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [userName]);

    useEffect(() => {
        setShowTable(!!userName && !!usersFromApi.length);
    }, [userName, usersFromApi]);

    return (
        <>
            <div className='container'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Search for user name</label>
                    <input type="text" class="form-control" id="userId" placeholder="user"  onChange={(e) => setUserName(e.target.value)} />
                </div>
                {showTable && <UsersTable data={usersFromApi}/>}
            </div>

        </>
    )
}

export default AdminPanel