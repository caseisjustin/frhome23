import React from 'react';
import { useSelector } from 'react-redux';

const AdminPage = () => {
  const { users } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Admin Page</h2>
      <h3>Registered Users:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
