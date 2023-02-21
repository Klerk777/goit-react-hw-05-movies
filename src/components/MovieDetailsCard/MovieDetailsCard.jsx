import defaultPoster from '../../images/defaultPoster.png';
import styles from './MovieDetailsCard.module.scss';
import PropTypes from 'prop-types';

const MovieDetailsCard = ({ movie }) => {
  const {
    title,
    poster_path,
    release_date,
    genres,
    status,
    vote_average,
    overview,
  } = movie;

  const genresList = genres.map(item => item.name).join(', ');
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <article className={styles.movieCard}>
        <img
          className={styles.poster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultPoster
          }
          alt={title}
        />
        <div className={styles.info}>
          <p>
            <span>Overview: </span> <br />
            {overview}
          </p>

          <p>
            <span>Status: </span> {status}
          </p>
          <p>
            {status === 'Released' && (
              <>
                <span>Release date: </span>
                {release_date}
              </>
            )}
          </p>
          <p>
            <span>Genres: </span> {genresList}
          </p>
          <p>
            <span>Reating: </span> {vote_average.toFixed(1)}
          </p>
        </div>
      </article>
    </section>
  );
};

export default MovieDetailsCard;

MovieDetailsCard.propTypes = {
  movie: PropTypes.object,
};
