import React, { useEffect, useState } from 'react';
import Loading from '../layout/Loading';
import UserItem from './UserItem';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetching users FROM github REST API
  const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users', {
      headers: {
        Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} {...user} />;
        })}
      </div>
    );
  } else {
    return (
      <h3>
        <Loading />
      </h3>
    );
  }
}

export default UserList;
