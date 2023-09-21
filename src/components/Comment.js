import React from 'react';

function Comment({ comment }) {
  return (
    <div className="Comment">
      <p>
        <strong>{comment.user}</strong>
      </p>
      <p>{comment.comment}</p>
    </div>
  );
}

export default Comment;
