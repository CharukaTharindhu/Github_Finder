import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className='navbar bg-primary'>
      <h3>
        <i className='fab fa-github' />

        <Link to='/'>{props.title}</Link>
      </h3>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};
//wat to set default props
Navbar.defaultProps = {
  title: 'GitHub Finder',
};

//check type of props those are passing from parent
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

export default Navbar;
