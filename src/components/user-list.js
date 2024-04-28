import { useEffect, useState } from "react";
import UserAPI from "../api/user-api";

const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserAPI.getAll().then(data => setUsers(data));
  }, []);

  const UserTable = () => {

    const handleDelete = async (event) => {
      const userId = event.target.dataset.id;
      await UserAPI.delete(userId);
      const data = await UserAPI.getAll();
      setUsers(data);
    };

    return users.map((user) => (
      <tr key={user.id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.vatId}</td>
        <td>
          <button data-id={user.id} onClick={handleDelete} className="delete">X</button>
        </td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Vat-ID</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {UserTable()}
      </tbody>
    </table>
  );
};

export default UserList;