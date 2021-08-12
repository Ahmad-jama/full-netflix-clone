import { useState, useEffect } from "react";

const useGetMovie = (url) => {
  const imagePaseUrl = "http://image.tmdb.org/t/p/w500/";
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const mapingOnMovie = (moviesArray) => {
    console.log(moviesArray);
    return moviesArray.map((movie) => {
      const {
        id,
        poster_path,
        backdrop_path,
        name,
        title,
        overview,
        first_air_date,
      } = movie;
      const posterImage = !poster_path ? null : imagePaseUrl + poster_path;
      const backdropPath = !backdrop_path ? null : imagePaseUrl + backdrop_path;
      return {
        id,
        posterImage,
        name,
        title,
        overview,
        backdropPath,
        first_air_date,
      };
    });
  };

  const GetListOfMovie = async () => {
    const respones = await fetch(url);
    const { results } = await respones.json();
    const listOfMovie = mapingOnMovie(results);
    const filterNul = listOfMovie.filter((movie) => {
      return movie.posterImage !== null;
    });
    setMovieList(filterNul);
    setLoading(false);
  };

  useEffect(() => {
    GetListOfMovie();
  }, [url]);

  return { movieList, loading };
};

export default useGetMovie;
