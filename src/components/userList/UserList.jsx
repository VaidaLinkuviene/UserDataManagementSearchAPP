import React, {useState, useEffect} from 'react';
import './UserList.css';
import {users} from '../../data';


const UserList = ({posts}) => {

    
    return (
        <div className='usersList'>
            <h4 className='title'>All users:</h4>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((user) => (
                        <tr key={user.id}>
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


export default UserList;