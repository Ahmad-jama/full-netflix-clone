import React, { useState } from "react";
import { Header, Posters } from "../../components/MovieComponent";
import useGetMovies from "../../hooks/useGetMovies";
import Loading from "../../components/Loading/Loading";
import { Footer } from "../../components/HomeComponents";
import { useEffect } from "react";

const Movie = () => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const paseUrl = "https://api.themoviedb.org/3/";

  const topRatedMovie = useGetMovies(
    `${paseUrl}movie/top_rated?api_key=${apiKey}&page=3`
  );
  const popularMovie = useGetMovies(
    `${paseUrl}movie/popular?api_key=${apiKey}`
  );
  const nowPlayingMovie = useGetMovies(
    `${paseUrl}movie/now_playing?api_key=${apiKey}&page=2`
  );
  const upcomingMovie = useGetMovies(
    `${paseUrl}movie/upcoming?api_key=${apiKey}&page=2`
  );
  const topRatedTv = useGetMovies(
    `${paseUrl}tv/top_rated?api_key=${apiKey}&page=2`
  );
  const popularTv = useGetMovies(
    `${paseUrl}tv/popular?api_key=${apiKey}&page=2`
  );
  console.log(popularTv);
  if (popularTv.loading || topRatedMovie.loading || popularTv.loading)
    return <Loading />;

  return (
    <section
      style={{
        maxWidth: "1600px",
        margin: "auto",
      }}
    >
      <Header topRatedMovie={topRatedMovie} topRatedTv={topRatedTv} />
      <Posters
        topRatedMovie={topRatedMovie.movieList}
        nowPlayingMovie={nowPlayingMovie.movieList}
        upcomingMovie={upcomingMovie.movieList}
        popularMovie={popularMovie.movieList}
        topRatedTv={topRatedTv.movieList}
        popularTv={popularTv.movieList}
      />
      <Footer />
    </section>
  );
};

export default Movie;
