import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import styles from './MovieDetailsCast.module.scss';

const MovieDetailsCast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieID) return;
    const getCast = async () => {
      try {
        const receivedCast = await api.getMovieCast(movieID);
        setCast(receivedCast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieID]);

  return (
    <>
      {cast && (
        <section>
          <ul className={styles.castList}>
            {cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <span className={styles.defaultAvatar}> </span>
                )}
                <div className={styles.castInfo}>
                  <p className={styles.actor}>{name}</p>
                  <p className={styles.role}>
                    <span>Character:</span> {character}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default MovieDetailsCast;
