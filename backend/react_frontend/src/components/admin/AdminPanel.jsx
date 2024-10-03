import React, { useEffect, useState } from 'react';
import UsersTable from './UsersTable';
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axiosClient';
import { AllUsers } from './AllUsers';


const AdminPanel = () => {
    const { token } = useStateContext();

    const [userName, setUserName] = useState('');
    const [usersFromApi, setUsersFromApi] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [showAllUsers, setShowAllUsers] = useState(false);
    const [buttonText, setButtonText] = useState('Show all users');

    const delay = 0;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization': `Bearer ${token}`,
    }

    const fetchUsers = (payload) => {
        axiosClient.post('/admin/search_user', payload, headers)
            .then(data => setUsersFromApi(data.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        setUsersFromApi([]);
        const debounceTimeout = setTimeout(() => {
            try {
                if (!!userName) {
                    fetchUsers({ user_name: userName });
                }
            }
            catch (e) {
                console.log(e);
            }

        }, delay);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [userName]);

    useEffect(() => {
        setShowTable(!!userName && !!usersFromApi?.length);
    }, [userName, usersFromApi]);

    const getAllUsers = () => {
        !showAllUsers ? setButtonText('Hide all users') : setButtonText('Show all users');
        setShowAllUsers(!showAllUsers);
        axiosClient.get('admin/all_users', {}, headers)
            .then(data => setAllUsers(data.data))
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='container'>
                <div className='content'>
                    <button href='#' className='btn-logout' onClick={getAllUsers}>{buttonText}</button>
                </div>
                {
                    showAllUsers &&
                    <AllUsers allUsers={allUsers} />
                }
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Search for user name</label>
                    <input type="text" className="form-control" id="userId" placeholder="user" onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                {
                    showTable &&
                    <UsersTable usersFromApi={usersFromApi} />
                }


            </div>

        </>
    )
}

export default AdminPanel