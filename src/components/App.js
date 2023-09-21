import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import CommentList from './CommentList';
import video from '../data/video.js';

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <VideoPlayer video={video} upvotes={upvotes} downvotes={downvotes} />
      <button onClick={handleUpvote}>👍</button>
      <button onClick={handleDownvote}>👎</button>
      <button onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && <CommentList comments={video.comments} />}
    </div>
  );
}

export default App;
