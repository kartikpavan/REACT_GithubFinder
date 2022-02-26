import React from 'react';
import UserList from '../components/users/UserList';
import UserSearch from '../components/users/UserSearch';

function Home() {
  return (
    <div>
      <UserSearch />
      <UserList />
    </div>
  );
}

export default Home;