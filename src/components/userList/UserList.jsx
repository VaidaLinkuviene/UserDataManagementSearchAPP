import React, { useEffect } from 'react';
import UserListItem from './UserListItem';
import {users} from '../../data'

const UserList = () => {

useEffect(()=>{
    console.log(users)

})

  return (
    <div>
        <UserListItem users={users} title="All users"/>
    </div>
  )
}

export default UserList