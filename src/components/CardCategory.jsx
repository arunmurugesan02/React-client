import React from 'react';
import '../css/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className='card'>
      <Link className="link" to={`/post/${item.id}`}>
        <span className='title'>{item.name}</span>
        <img src={item.url} alt="" className='img' />
        <p className='desc'>{item.description}</p>
      </Link>
    </div>
  );
};

export default Card;
