import React, { useState } from 'react';
import propTypes from 'prop-types';

const Search = (props) => {
  Search.prototype = {
    searchUsers: propTypes.func.isRequired,
    setAlert: propTypes.func.isRequired,
  };
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      props.setAlert(' Please Enter Something', 'light');
    } else {
      props.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search a User...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        ></input>
      </form>
    </div>
  );
};

export default Search;
