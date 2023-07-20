import React, {useState} from 'react';
import Header from '../components/header/Header'
import SearchComponent from '../components/searchComponents/SearchComponent';
import {users} from '../data';
import Popup from '../components/popupComponent/Popup';
import UserListItem from '../components/userList/UserListItem';

const MainPage = () => {

  return (
    <div>
        <Header />
        <SearchComponent users={users}/>
        <UserListItem />
        <Popup />
    </div>
  )
}

export default MainPage