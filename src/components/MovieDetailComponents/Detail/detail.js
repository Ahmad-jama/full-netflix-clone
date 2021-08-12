import React from "react";
import styles from "./detail.module.css";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import Poster from "../../MovieComponent/Poster/Poster";
import useGetMovies from "../../../hooks/useGetMovies";
import { useParams } from "react-router";
import Loading from "../../Loading/Loading";
const Detail = ({ movie }) => {
  const { movieId, type } = useParams();
  const {
    image_path,
    title,
    genres,
    overview,
    release_date,
    popularity,
    productionCompanies,
    lang,
    name,
    first_air_date,
  } = movie;
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const paseUrl = "https://api.themoviedb.org/3";

  const similarMovie = useGetMovies(
    `${paseUrl}/${type}/${movieId}/similar?api_key=${apiKey}`
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);
  console.log(movie);
  if (similarMovie.loading) return <Loading />;
  return (
    <section className={styles.detail_info}>
      <h1 className={styles.title}>
        {title ? title : name} {type} {release_date}
      </h1>
      <div className={styles.video_container}>
        <YoutubeEmbed title={title || name} />
      </div>
      <div className={styles.desc}>
        <div className={styles.poster}>
          <img src={image_path} alt={title} />
        </div>
        <div className={styles.info}>
          <p>title: {title || name}</p>
          <p>language: {lang} </p>
          <p>
            genres:{" "}
            {genres?.map((gen) => (
              <span key={gen.id}>{gen.name}</span>
            ))}
          </p>
          <p>production company: {productionCompanies} </p>
          <p> popularity: {popularity} </p>
          <p>release_date: {release_date || first_air_date}</p>
        </div>
      </div>
      <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>story</h1>
      <p style={{ marginBottom: "3rem" }}>
        {overview?.slice(0, 872)}
        {overview?.length > 872 && "..."}
      </p>{" "}
      <Poster
        title="Similar Movies"
        movies={similarMovie.movieList}
        type={type}
      />
    </section>
  );
};

export default Detail;
