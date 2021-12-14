import React, { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

function ClearPage() {
  const { clearUser, users } = useContext(GithubContext);

  const onSubmit = (e) => {
    clearUser();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        {users.length > 0 && (
          <input
            type='submit'
            value='Clear Page'
            className='btn btn-light btn-block'
          />
        )}
      </form>
    </div>
  );
}

export default ClearPage;
