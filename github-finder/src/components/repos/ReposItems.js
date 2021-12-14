import React from 'react';
import propTypes from 'prop-types';

const ReposItems = ({ repo }) => {
  ReposItems.propTypes = { repo: propTypes.object.isRequired };
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>
          <strong>{repo.name}</strong>
        </a>
      </h3>
    </div>
  );
};

export default ReposItems;
