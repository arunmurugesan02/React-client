import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/post.css'

const Post = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data,"3333");
  return (
    <div className='posts'>
      <img src={data.urlToImage} alt="" className='imgg' />
      <span className='titlee'>{data.author}</span>
      <p className='longdescc'>{data.description}</p>
    </div>
  );
};

export default Post;
