import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import axiosClient from '../axiosClient';

const DefaultLayout = () => {
    const { user, token, setUser, setToken } = useStateContext();

    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => { setUser(data) })
                .catch(err => console.log(err));
        }
    }, []);

    if (!token) {
        return <Navigate to='/login' />
    }

    const onLogout = (e) => {
        e.preventDefault();

        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            })
            .catch(err => console.log(err))
    }


    return (
        <div id='defaultLayout'>
            <aside id='aside'>
                <Link to='/calculator'>Calculator</Link>
                <Link to='/requests'>Requests</Link>
                {user.role === 'admin' && <Link to='/admin'>Admin Panel</Link>}
            </aside>
            <div className='content'>
                <header id='header'>
                    <div>
                        <h1>
                            App
                        </h1>
                    </div>
                    <div>
                        {user.name}
                        {/*{user.name} &nbsp; &nbsp;*/}
                        <a href="#" className='btn-logout' onClick={onLogout}>Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DefaultLayout
