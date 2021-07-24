import React from "react";
import { useParams } from "react-router";
import Loading from "../../Loading/Loading";
import Detail from "../Detail/detail";

const DetailSection = () => {
  const paseUrl = "https://api.themoviedb.org/3";
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const imagePaseUrl = "http://image.tmdb.org/t/p/w500/";

  const [movie, setMovie] = React.useState({});

  const { movieId, type } = useParams();
  const GetMovie = async () => {
    const respones = await fetch(`${paseUrl}/${type}/${movieId}?api_key=${apiKey}`);
    const {
      poster_path,
      title,
      name,
      overview,
      release_date,
      genres,
      popularity,
      production_companies,
      spoken_languages,
      
    } = await respones.json();
    const productionCompanies = production_companies[0]?.name;
    const lang = spoken_languages[0].english_name;
    const image_path = imagePaseUrl + poster_path;
    setMovie({
      image_path,
      title,
      name,
      lang,
      genres,
      overview,
      release_date,
      popularity,

      productionCompanies,
    });
  };
  React.useEffect(() => {
  GetMovie();
  }, [movieId]);
  if (!movie) return <Loading />;
  return <Detail movie={movie} />;
};

export default DetailSection;
