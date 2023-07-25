import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import SearchComponent from "../components/searchComponents/SearchComponent";
import { users } from "../data";
import Popup from "../components/popupComponent/Popup";
import UserList from "../components/userList/UserList";
import Pagination from "../components/pagination/Pagination";

const MainPage = () => {
  const [posts] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    console.log("posts", posts);
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <SearchComponent users={users} />
      <UserList posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}
      />
      <Popup />
    </div>
  );
};

export default MainPage;
