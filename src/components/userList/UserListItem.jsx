import React from 'react';
import './UserListItem.css'

const UserListItem = ({ title, users }) => {
    return (
        <div className='users-list'>
            <h4 className='title'>{title}</h4>


            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr >
                            <th scope="row">{user.id}</th>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default UserListItem;