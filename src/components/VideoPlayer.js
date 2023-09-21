import React from 'react';

function VideoPlayer({ video, upvotes, downvotes }) {
  return (
    <div className="VideoPlayer">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <div className="video-details">
        <h2>{video.title}</h2>
        <p>Views: {video.views}</p>
        <p>Upvotes: {upvotes}</p>
        <p>Downvotes: {downvotes}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;