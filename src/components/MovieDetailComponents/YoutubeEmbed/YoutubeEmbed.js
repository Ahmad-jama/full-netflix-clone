import React, { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const YoutubeEmbed = ({ title }) => {
  const [youtubeId, setYoutubeId] = useState("");
  const opts = {
    width: "100%",
  };
  const getVideo = () => {
    movieTrailer(title, { id: true, multi: false })
      .then((id) => {
        setYoutubeId(id);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getVideo();
  }, [title]);
  if (!youtubeId) return null;
  return <YouTube videoId={youtubeId} opts={opts} />;
};

export default YoutubeEmbed;
