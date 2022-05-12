import React from 'react';
import { Link, useParams } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

function Single() {
  const { postId } = this.props.params;
  const i = this.props.posts.findIndex((post) => post.code === postId);
  const post = this.props.posts[i];
  const postComments = this.props.comments[postId] || [];
  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...this.props} />
      <Comments postComments={postComments} />
    </div>
  );
}
export default Single;