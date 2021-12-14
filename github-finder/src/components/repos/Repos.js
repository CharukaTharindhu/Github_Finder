import React,{useContext} from 'react';
import ReposItems from './ReposItems';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext'; 

const Repos = () => {
  const { repos } = useContext(GithubContext);

  return repos.map((repo) => <ReposItems repo={repo} />);
};
Repos.PropTypes = { repos: PropTypes.array.isRequired };

export default Repos;
