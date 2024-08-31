import React from 'react'

export const AllUsers = ({allUsers}) => {

    return (
        <>
            <div className='container mt-3'>
                <h3>All users</h3>
                <table className="table table-striped table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map(item => (
                                <tr key={item.id} >
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
