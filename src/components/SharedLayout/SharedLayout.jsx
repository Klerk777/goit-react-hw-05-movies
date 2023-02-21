import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <NavLink className={styles.menuLink} to="/" end>
            Home
          </NavLink>
          <NavLink className={styles.menuLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <div className={styles.container}>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default SharedLayout;
