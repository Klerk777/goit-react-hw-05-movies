import { useState, useEffect, Suspense } from 'react';
import {
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import api from '../../services/api';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import styles from './MovieDetails.module.scss';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const { movieID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const returnLink = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieID) return;
    const getMovieDetails = async () => {
      try {
        setisLoading(true);
        const receivedMovie = await api.getMovieById(movieID);
        setMovie(receivedMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };
    getMovieDetails();
  }, [movieID]);

  const goBack = () => navigate(returnLink);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>error</p>}
      <main>
        <button className={styles.backBtn} onClick={goBack}>
          &lt;-- Go back
        </button>
        {movie && <MovieDetailsCard movie={movie} />}
        <div>
          <h3>Additional information</h3>
          <ul className={styles.linksBar}>
            <li>
              <Link
                className={styles.link}
                state={{ from: returnLink }}
                to="cast"
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                state={{ from: returnLink }}
                to="reviews"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MovieDetails;
