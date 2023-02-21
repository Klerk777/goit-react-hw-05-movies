import axios from 'axios';

const API_KEY = '431ab85139813dba3796c445694ce723';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

/**
 * Function for fetching tranding movies from TMDB (The movie data base) API.
 * @param {string=} [type=all] - Type of content. Allowed: all, movie, tv, person. Default = all
 * @param {string=[day]} [period=day] - Time window foe rating. Allowed: day, week. Default = day
 * @returns {Array.<object>} Array of selected content objects
 */
const getTrendingMovies = async (type = 'all', period = 'day') => {
  const response = await instance(`/trending/${type}/${period}?`);
  if (response.status === 200) return response.data.results;
};

const getMovieByQuery = async query => {
  const response = await instance(`/search/movie?query=${query}`);
  if (response.status === 200) return response.data.results;
};

const getMovieById = async id => {
  const response = await instance(`/movie/${id}?`);
  if (response.status === 200) return response.data;
};

const getMovieCast = async id => {
  const response = await instance(`/movie/${id}/credits?`);
  if (response.status === 200) return response.data.cast;
};

const getMovieReviews = async id => {
  const response = await instance(`/movie/${id}/reviews?`);
  if (response.status === 200) return response.data.results;
};

const api = {
  getTrendingMovies,
  getMovieByQuery,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};
export default api;
