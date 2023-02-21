import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import styles from './MovieDetailsReviews.module.scss';

const MovieDetailsReviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getReviews() {
      try {
        const movieReviews = await api.getMovieReviews(movieID);

        if (movieReviews.length === 0) {
          return;
        }
        setReviews(movieReviews);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieID]);

  return (
    <section>
      {reviews ? (
        <ul className={styles.reviewsList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews for this movie.</p>
      )}
    </section>
  );
};

export default MovieDetailsReviews;
