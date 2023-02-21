import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  const handleFormSubmit = query => {
    if (searchQuery === query) return;
    setSearchParams({ query });
    setMovies([]);
  };

  useEffect(() => {
    if (!searchQuery) return;
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const receivedMovies = await api.getMovieByQuery(searchQuery);

        if (receivedMovies.length < 1) {
          toast.error(
            `Unfortunately, nothing was found for your query - ${receivedMovies}`,
            {
              icon: '😢',
            }
          );
        }
        setMovies(receivedMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchQuery]);

  return (
    <main>
      <SearchForm onFormSubmit={handleFormSubmit} />
      {movies && <MoviesList movies={movies} location={location} />}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </main>
  );
};

export default Movies;
