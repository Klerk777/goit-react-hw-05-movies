import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      <ul className={styles.list}>
        <MovieItem movies={movies} location={location} />
      </ul>
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object,
};
