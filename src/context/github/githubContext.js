import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const defaultState = {
    users: [],
    user: {},
    repos: [],
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
    if (items.length <= 0) {
      window.location.href = '/notfound';
    } else {
      dispatch({ type: 'FETCH_USERS', payload: items });
    }
  };

  //!Get single User
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `token${GITHUB_TOKEN}`,
      },
    });
    console.log(response);
    if (response.status === 404) {
      window.location.href = '/notfound';
    } else {
      const data = await response.json();
      dispatch({ type: 'GET_USER', payload: data });
    }
  };

  //!To get users Repos from github
  const getRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({ sort: 'created', per_page: 10 });
    const response = await fetch(
      `https://api.github.com/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token${GITHUB_TOKEN}`,
        },
      }
    );
    if (response.status === 404) {
      console.log(response.status);

      window.location.href = '/notfound';
    } else {
      const data = await response.json();
      dispatch({ type: 'GET_REPOS', payload: data });
    }
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
        user: state.user,
        users: state.users,
        loading: state.loading,
        repos: state.repos,
        fetchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
