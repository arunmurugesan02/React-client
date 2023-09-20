import React from 'react';
import '../css/Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const navigateToPost = () => {
    console.log(item,"2222");
    navigate(`/news/post/${item.id}`, { state: { data: item } });
  };

  return (
    <div className='card' onClick={navigateToPost}>
      <span className='title'>{item.author}</span>
      <img src={item.urlToImage} alt="" className='img' />
      <p className='desc'>{item.description}</p>
    </div>
  );
};

export default Card;
