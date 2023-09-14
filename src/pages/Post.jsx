import React from 'react';
import '../css/post.css';
import { useLocation } from 'react-router-dom';

const Post = ({ data }) => { // Receive the 'data' array as a prop
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const post = data.find((item) => item.id.toString() === path);

  if (!post) {
    // Handle the case where the post is not found
    return (
      <div className="post">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <div className='post'>
      <img src={post.img} alt="" className='img' />
      <span className='title'>{post.title}</span>
      <p className='longdesc'>{post.longDesc}</p>
    </div>
  );
};

export default Post;
