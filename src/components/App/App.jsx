import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const MovieDetailsCast = lazy(() =>
  import('../MovieDetailsCast/MovieDetailsCast')
);
const MovieDetailsReviews = lazy(() =>
  import('../MovieDetailsReviews/MovieDetailsReviews')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<MovieDetailsCast />} />
            <Route path="reviews" element={<MovieDetailsReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer theme="light" autoClose="3500" />
    </>
  );
};
