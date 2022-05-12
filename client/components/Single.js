import React from 'react';
import { Link, useParams } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

// const Single = React.createClass({
//   render() {
//     const {postId} = this.props.params;
//     const i = this.props.posts.findIndex(
//       (post) => post.code === postId
//     );
//     const post = this.props.posts[i];
//     const postComments = this.props.comments[postId] || [];
//     return (
//       <div className="single-photo">
//         <Photo i={i} post={post} {...this.props} />
//         <Comments postComments={postComments} />
//       </div>
//     );
//   },
// }); 

export function Single(props){
   const {postId} = props.params;
     const i = props.posts.findIndex(
      (post) => post.code === postId
    );
    const post = props.posts[i];
    const postComments = props.comments[postId] || [];
return(
   

      <div className="single-photo">
        <Photo i={i} post={post} {...props} />
        <Comments postComments={postComments} />
      </div>
    );
};


