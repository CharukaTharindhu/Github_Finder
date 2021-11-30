import { useState, useEffect, Fragment } from 'react';
import UserItem from './UserItem';
import axios from 'axios';
import Spinner from './../layouts/Spinner';
import Search from './Search';
import ClearPage from './ClearPage';
import Alert from '../layouts/Alert';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3 , 1fr)',
  gridGap: '1rem',
};

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlerts] = useState({ msg: '', type: '' });

  const getGitHubUsers = async () => {
    setLoading(true);
    const usersList = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers([...usersList.data]); // this is how set value for array state

    setLoading(false);
  };

  const searchUsers = async (text) => {
    setLoading(true);
    const usersList = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers([...usersList.data.items]); // this is how set value for array state

    setLoading(false);
  };

  const clearUser = () => {
    setLoading(true);
    setUsers([]);
    setLoading(false);
  };

  const setAlert = (msg, type) => {
    setAlerts({ msg: msg, type: type });

    setTimeout(() => setAlerts({ msg: '', type: '' }), 3000);
  };

  useEffect(() => {
    // getGitHubUsers();
  });
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Alert alert={alert} />
          <Search searchUsers={searchUsers} setAlert={setAlert} />
          <ClearPage
            clearUser={clearUser}
            showClear={users.length > 0 ? true : false}
          />

          <div style={userStyle}>
            {users.map((user) => (
              <div>
                <UserItem key={user.id} user={user} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Users;
