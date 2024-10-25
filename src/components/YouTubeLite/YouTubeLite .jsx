import React, { useState } from "react";

import youtubeBnt from "../../assets/youtube-btn.png";
import "./youtubelite.css";

const YouTubeLite = ({ videoId, additionalClass = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`youtube-lite ${additionalClass}`}
      onClick={handleClick}
    >
      {!isLoaded ? (
        <img
          className="info__video-container"
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video Thumbnail"
        />
      ) : (
        <iframe
          className="info__video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {!isLoaded && (
        <div className="play-button">
          <img src={youtubeBnt} alt="YouTube Play"></img>
        </div>
      )}
    </div>
  );
};

export default YouTubeLite;
