import {Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './../layouts/Spinner';
import Search from './Search';
import ClearPage from './ClearPage';
import Alert from '../layouts/Alert';
import GithubContext from '../../context/github/GithubContext';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3 , 1fr)',
  gridGap: '1rem',
};

const Users = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Alert alert={alert} />
          <Search />
          <ClearPage />

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
