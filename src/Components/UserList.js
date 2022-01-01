import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => response.data)
      .then((resData) => setUsers(resData));
  }, []);

  return (
    <div>
      <h2>Welcome, this is the List of Users</h2>
      <div className="user-container">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
