import React from 'react';
import { Link, useParams } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

export function Single(props) {
  const { postId } = props.params;
  const i = props.posts.findIndex((post) => post.code === postId);
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];
  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  );
}
