import { useState, useEffect } from "react";

const useGetMovie = (url) => {
  const imagePaseUrl = "http://image.tmdb.org/t/p/w500/";
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const mapingOnMovie = (moviesArray) => {
    return moviesArray.map((movie) => {
      const { id, poster_path , name, title, overview} = movie;
      const posterImage = !poster_path? null: imagePaseUrl + poster_path;
      return { id, posterImage, name, title, overview };
    });
  };

  const GetListOfMovie = async () => {
    const respones = await fetch(url);
    const { results } = await respones.json();
    const listOfMovie = mapingOnMovie(results);
     const filterNul = listOfMovie.filter(movie =>{
      return movie.posterImage !== null
    })
     setMovieList(filterNul);
    setLoading(false);
  };

  useEffect(() => {
    GetListOfMovie();
  }, [url]);

  return { movieList, loading };
};

export default useGetMovie;
