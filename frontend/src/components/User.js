import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {

    const user = useSelector((state) => state.login.user?.user);

    return (
        <>
            <div className='container mt-3'>
                <table class="table table-striped table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User