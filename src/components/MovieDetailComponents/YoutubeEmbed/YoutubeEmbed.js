import React, { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import Loading from "../../Loading/Loading";
const YoutubeEmbed = ({ title }) => {
  const [youtubeId, setYoutubeId] = useState("");
  const [loading, setLoading] = useState(true);
  const opts = {
    width: "100%",
  };
  const getVideo = () => {
    movieTrailer(title, { id: true, multi: false })
      .then((id) => {
        setYoutubeId(id);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getVideo();
  }, [title]);
  if (!youtubeId) return null;
  if (loading) return <Loading />;
  return <YouTube videoId={youtubeId} opts={opts} />;
};

export default YoutubeEmbed;
