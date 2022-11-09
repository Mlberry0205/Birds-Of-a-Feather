import React from 'react';
import './BirdCards.css'
import { Link } from 'react-router-dom'

const BirdCard = ({name, sex, id}) => {
  return (
    <Link to={`/IndividualBird/${id}`} className='cards-container'>
      <div className='card'>
        <h3>{name}</h3>
        <p>{sex}</p>
      </div>
    </Link>
  )
}

export default BirdCard;