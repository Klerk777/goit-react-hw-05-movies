import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import api from '../../services/api';
import styles from './Home.module.scss';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const receivedMovies = await api.getTrendingMovies('movie', 'day');
        setMovies(receivedMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <h1 className={styles.title}>Trending today</h1>
      {movies && <MoviesList movies={movies} location={location} />}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </main>
  );
};

export default Home;
