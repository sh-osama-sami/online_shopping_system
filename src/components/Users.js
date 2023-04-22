import React from "react";
import { useState , useEffect } from "react";
import axios from "../api/axios";
const Users = () => {
  const [users, setUsers] = useState();
  return (
    <article>
      <h2>
        Users list
        {users.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}> {user?.username} </li>
            ))}
          </ul>
        ) : (
          <p>No users to display</p>
        )}
      </h2>
    </article>
  );
};

export default Users;
