import React from 'react';
import './BirdCards.css'

const BirdCard = ({birdSpecies, birdSex}) => {
  return (
    <div className='card'>
      <h3>{birdSpecies}</h3>
      <p>{birdSex}</p>
    </div>
  )
}

export default BirdCard;