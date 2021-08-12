import React, { useRef, useEffect } from "react";
import styles from "./poster.module.css";
import { Link } from "react-router-dom";
const Poster = ({ title, movies, type }) => {
  const postersContainer = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    if (postersContainer) {
      postersContainer.current.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - postersContainer.current.offsetLeft;
        scrollLeft = postersContainer.current.scrollLeft;
      });

      postersContainer.current.addEventListener("mouseup", () => {
        isDown = false;
      });
      postersContainer.current.addEventListener("mouseleave", () => {
        isDown = false;
      });

      postersContainer.current.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - postersContainer.current.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        postersContainer.current.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);

  return (
    <section className={styles.poster}>
      <h1 className={styles.title}>{title}</h1>
      <section ref={postersContainer} className={styles.poster_images}>
        {movies.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie-detail/${movie.id}/${type}`}>
              <img
                width="210"
                height="316"
                src={movie.posterImage}
                alt={movie.title}
              />
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default Poster;
