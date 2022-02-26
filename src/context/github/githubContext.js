import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const defaultState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  //!Fetching users FROM github REST API
  const fetchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({ q: text });
    const response = await fetch(
      `https://api.github.com/search/users?${params}`,
      {
        headers: {
          Authorization: `token${GITHUB_TOKEN}`,
        },
      }
    );
    const { items } = await response.json();

    dispatch({ type: 'FETCH_USERS', payload: items });
  };

  //!Clearing Out Users
  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  //!Setting loading state
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
        clearUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
