import React from 'react';
import './SelectedUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SelectedUser = ({clickedUser, setClickedUser}) => {

  const handleDelete= (user) =>{
    let updatedUser = clickedUser.filter((item) => item.id !== user.id)
      setClickedUser(updatedUser) 
    }  
  
  return (
    <div>
        <h4 className="title">Selected users:</h4>
        {clickedUser.length > 0 ? (
        <ul className='table'>
        {clickedUser.map((user) => (
          
            <li className='selectedUser' key={user.id}>{user.first_name} {user.last_name}  <text style={{fontStyle: 'italic', fontWeight: '400'}}>(Phone No: {user.phone})</text>   <div className='btn' onClick={()=>handleDelete(user)}><FontAwesomeIcon icon="fa-solid fa-trash" style={{color: 'red'}}/> </div></li>
        ))}

</ul>
        ) : (
          <p className='noUsersSelected'>No users selected</p>
        )}
    </div>
  )
}

export default SelectedUser