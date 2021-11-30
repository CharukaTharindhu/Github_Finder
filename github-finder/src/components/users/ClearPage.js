import React from 'react';
import propTypes from 'prop-types';

function ClearPage(props) {
  ClearPage.prototype = {
    clearUser: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
  };
  const onSubmit = (e) => {
    props.clearUser();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        {props.showClear && (
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
