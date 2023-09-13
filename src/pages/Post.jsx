import React from 'react'
import { posts } from '../data'
import '../css/post.css'
import { useLocation } from 'react-router-dom'

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]
  const post= posts.find(p => p.id.toString() ===path)
  console.log(post);
  console.log(location);
  return (
    <div className='post'>
      
        <img src={post.img} alt="" className='img' />
        <span className='title'>{post.title}</span>
        <p className='longdesc'>{post.longDesc}</p>
    </div>
  )
}

export default Post