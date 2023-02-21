import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultPoster from '../../../images/defaultPoster.png';
import styles from './MovieItem.module.scss';

const MovieItem = ({ movies, location }) => {
  return movies.map(({ id, poster_path, title, name }) => {
    return (
      <li key={id} className={styles.item}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <div>
            <img
              className={styles.poster}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : defaultPoster
              }
              alt={title ?? name}
            />
            <p className={styles.title}>{title ?? name}</p>
          </div>
        </Link>
      </li>
    );
  });
};

export default MovieItem;

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object,
};
