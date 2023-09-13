import React from 'react'
import {posts} from '../data'
import Card from '../components/Card'
import "../css/Home.css"
const Home = () => {
  return (
    <div className='home'>{posts.map(posts =>(
        <Card key={posts.id} posts={posts}/>
    ))}</div>
  )
}

export default Home