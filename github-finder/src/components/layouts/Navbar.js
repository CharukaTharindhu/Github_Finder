import React from 'react';
import propTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <div className='navbar bg-primary'>
      <h3>
        <i className='fab fa-github' />
        &nbsp;
        {props.title}
      </h3>
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
