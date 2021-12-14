import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search users
  const searchUsers = async (text) => {
    setLoading();
    const usersList = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // setUsers([...usersList.data.items]); // this is how set value for array state
    dispatch({ type: SEARCH_USERS, payload: usersList.data.items });
  };

  //Get User
  const getGitHubUser = async (userName) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USER, payload: data });
  };

  //Get Repos
    const getUserRepos = async (userName) => {
    setLoading();
    const usersReposList = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

     dispatch({ type: GET_REPOS, payload: usersReposList.data });
  
  };

  //Clear users
  const clearUser = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const { users, user, repos, loading } = state;
  const value = {
    users,
    user,
    repos,
    loading,
    searchUsers,
    clearUser,
    getGitHubUser,getUserRepos
  };
  return (
    <GithubContext.Provider value={value}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
