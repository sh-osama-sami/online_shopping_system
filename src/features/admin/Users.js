import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosSelling } from "../../api/axios";
const Users = () => {
    const [users, setUsers] = useState([]);
 const [message, setMessage] = useState("");

 useEffect(() => {
    axiosSelling.get('/admin/getallcustomers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


   
        return (
            <div className="container">
              <h1>Users</h1>
              <table className="shipping-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );

};

export default Users;