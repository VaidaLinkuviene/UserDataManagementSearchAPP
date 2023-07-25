import React, { useState, useEffect } from "react";
import "./SearchComponent.css";
import Popup from "../popupComponent/Popup";
import SelectedUser from "../selectedUser/SelectedUser";

const SearchComponent = ({ users }) => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [clickedUser, setClickedUser] = useState([]);  
  const [userAddedList, setUserAddedList] = useState([]);

  useEffect(() => {
    const updatedUserAddedList = clickedUser.map((user) => user.id);
    setUserAddedList(updatedUserAddedList);
  }, [clickedUser]);

  const handleUser = (user) => {
    setSelectedUser(user);
    setButtonPopup(true);
  };

  const addUserToList = (chosenUser) => {
    setClickedUser(prevUser => [...prevUser, chosenUser]);
    setUserAddedList((prevList) => [...prevList, chosenUser.id]);
  }

  const filteredUsers = users.filter((item) => {
    return search.toLowerCase() === ""
      ? ""
      : item.first_name.toLowerCase().includes(search) ||
          item.last_name.toLowerCase().includes(search) ||
          item.first_name.includes(search) ||
          item.last_name.includes(search);
  });

  const filteredAndMappedUsers = () => {
    return (
      <div className="wrapper">
        {filteredUsers.map((user) => (
          <div className="wrapperItem" key={user.id}>
            <button
              onClick={() => handleUser(user)}
              key={user.id}
              className="foundUser"
            >
              <div className="userInfo">
                <img
                  className="userPhoto"
                  src={user.photo}
                  alt={user.first_name}
                />
                <div className="nameEmail">
                  <div className="mainInfo">
                    {user.first_name} {user.last_name} ({user.gender})
                  </div>
                  <div>{user.email} </div>
                </div>
              </div>
              <div className="diagnosis">
                <div className="description" style={{ fontStyle: "italic" }}>
                  Description:{" "}
                </div>{" "}
                {user.description}
              </div>
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <input
        className="searchInput"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter first or last name"
      ></input>
      {filteredAndMappedUsers()}
      {selectedUser && (
        <Popup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          user={selectedUser}
          addUserToList={addUserToList}
        />
      )}
      <SelectedUser clickedUser={clickedUser} setClickedUser={setClickedUser} />
    </div>
  );
};


export default SearchComponent;
