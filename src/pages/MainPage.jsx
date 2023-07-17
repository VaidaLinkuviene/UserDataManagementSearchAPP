import React from 'react';
import Header from '../components/header/Header'
import UserList from '../components/userList/UserList';
import SearchComponent from '../components/searchComponents/SearchComponent';
import {users} from '../data'

const MainPage = () => {
  return (
    <div>
        <Header />
        <SearchComponent users={users}/>
        <UserList />
    </div>
  )
}

export default MainPage