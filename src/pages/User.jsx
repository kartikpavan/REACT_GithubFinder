import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/github/githubContext';
import { useParams } from 'react-router-dom';

function User() {
  const { getUser, user } = useGlobalContext();
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);
  return <div>{user.login}</div>;
}

export default User;
