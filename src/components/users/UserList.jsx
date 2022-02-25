import React, { useEffect, useState } from 'react';
import Loading from '../layout/Loading';
import UserItem from './UserItem';
import { useGlobalContext } from '../../context/github/githubContext';

function UserList() {
  const { loading, users, fetchUsers } = useGlobalContext();

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
