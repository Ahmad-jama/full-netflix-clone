import React from "react";
import Poster from "../Poster/Poster";
const Posters = ({ topRatedMovie, popularMovie, nowPlayingMovie, upcomingMovie, topRatedTv , popularTv}) => {
  return (
    <section >
      <Poster title="top rated movies" movies={topRatedMovie} type='movie'/>
      <Poster title="popular movies" movies={popularMovie}  type='movie'/>
      <Poster title="now playing movies" movies={nowPlayingMovie}  type='movie'/>
      <Poster title="upcoming movies" movies={upcomingMovie}  type='movie'/>
      <Poster title='top Rated Tv shows' movies={topRatedTv}  type='tv'/>
      <Poster title='popular tv shows' movies={popularTv}  type='tv'/>
    </section>
  );
};

 

export default Posters;
