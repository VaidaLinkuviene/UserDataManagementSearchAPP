import React, { useState } from 'react';
import './SearchComponent.css';
import Popup from '../popupComponent/Popup';

const SearchComponent = ({ users }) => {

  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleUser = (user) => {
    setSelectedUser(user);
    setButtonPopup(true);
  }

  return (
    <div>
      <input className='searchInput' onChange={(e) => setSearch(e.target.value)} placeholder='Enter first or last name'></input>
      <div className='wrapper'>
        {users.filter((item) => {
          return search.toLowerCase() === '' ? '' : (item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search) || item.first_name.includes(search) || item.last_name.includes(search));
        }).map((user) => (
          <div className='wrapperItem' key={user.id}>
          <button onClick={() => handleUser(user)} key={user.id} className='foundUser'>
            <div className='userInfo'>
              <img className='userPhoto' src={user.photo} alt={user.first_name} />
              <div className='nameEmail'>
                <div className='mainInfo'>{user.first_name} {user.last_name} ({user.gender})</div>
                <div>{user.email} </div>
              </div>
            </div>
            <div className='diagnosis'><div className='description' style={{ fontStyle: 'italic' }}>Description: </div> {user.description}</div>
          </button>
          </div>
        ))}
      </div>
      {selectedUser && (<Popup trigger={buttonPopup} setTrigger={setButtonPopup} user={selectedUser}/>
  )}
      </div>
  )
}

export default SearchComponent