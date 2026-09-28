import React from "react";

const VideoPlayer = ({ src, poster, autoPlay = false, controls = true, loop = false, muted = false }) => {
  return (
    <div className="w-full max-w-4xl lg:h-[450px] mx-auto rounded-lg overflow-hidden shadow-lg border">
      <video
        className="w-full lg:h-[450px]"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={muted}
      />
    </div>
  );
};

export default VideoPlayer;
