import React, { useContext, useState } from 'react';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetching users FROM github REST API
  const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users', {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };


  return (
    <AppContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
