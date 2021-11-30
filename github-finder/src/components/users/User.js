import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './../layouts/Spinner';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3 , 1fr)',
  gridGap: '1rem',
};

const User = () => {
  const { login } = useParams(); // use to access url parameters in functional component

  const [userDate, setUser] = useState({
    name: '',
    avatar_url: '',
    location: '',
    bio: '',
    blog: '',
    login: '',
    html_url: '',
    followers: '',
    following: '',
    public_repo: '',
    public_gists: '',
    hireable: '',
  });
  const [loading, setLoading] = useState(false);

  const getGitHubUser = async (userName) => {
    setLoading(true);
    const user = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser({
      name: user.data.name,
      avatar_url: user.data.avatar_url,
      location: user.data.location,
      bio: user.data.bio,
      blog: user.data.blog,
      login: user.data.login,
      html_url: user.data.html_url,
      followers: user.data.followers,
      following: user.data.following,
      public_repos: user.data.public_repos,
      public_gists: user.data.public_gists,
      hireable: user.data.hireable,
    }); // this is how set value for array state

    setLoading(false);
  };

  useEffect(() => {
    getGitHubUser(login);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div style={userStyle}>
            <h1>User : {userDate.name}</h1>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default User;
