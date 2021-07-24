import React from "react";
import styles from "./header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";


const Header = ({ topRatedMovie }) => {
   const arrayOfMovies = [...topRatedMovie.movieList]
    const movie = arrayOfMovies[Math.floor(Math.random() * arrayOfMovies.length - 1)]
    return (
     <section

      style={{
        backgroundImage: `${
  `url(${movie.posterImage})`
 
        }`,
      }}
      className={styles.header}
    >
      <Nav />
      <section className={styles.banner}>
        <h1>{movie.title || movie.name}</h1>
        <section>
          <Link to={`movie-detail/${movie.id}/movie`}>play</Link>
          <button>my list</button>
        </section>
        <p>
          {movie.overview
            ? movie.overview?.slice(0, 250)
            : '"Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective."'}
          ...
        </p>
      </section>
      <section className={styles.bottom_gradient}></section>
    </section>
  );
};

export default Header;


