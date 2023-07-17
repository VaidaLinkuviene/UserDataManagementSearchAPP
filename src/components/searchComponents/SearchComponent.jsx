import React, { useState } from 'react';
import './SearchComponent.css'

const SearchComponent = ({ users }) => {

  const [search, setSearch] = useState('');
  return (
    <div>
      <input className='searchInput' onChange={(e) => setSearch(e.target.value)} placeholder='Enter first or last name'></input>
        {users.filter((item) => {
          return search.toLowerCase() === '' ? '' : (item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search) || item.first_name.includes(search) || item.last_name.includes(search));
        }).map((user) => (
          <div key={user.id} className='foundUser'>
            <div className='userInfo'>
              <img className='userPhoto' src={user.photo} alt={user.first_name} />

              <div className='nameEmail'>
                <div className='mainInfo'>{user.first_name} {user.last_name} ({user.gender})</div>
                <div>{user.email} </div>
              </div>
            </div>
            <div className='diagnosis'><div className='description' style={{ fontStyle: 'italic' }}>Description: </div> {user.description}</div>
          </div>
        ))}
      </div>
  )
}

export default SearchComponent