import React from 'react';
import './BirdCards.css'
// import { Link } from 'react-router-dom'

const BirdCard = (props) => {
  // console.log('wtf', props.id)
  return (
    // <Link to={`/IndividualBird/${props.id}`} className='cards-container'>
      <div className='card' id={props.id}>
        <h3>{props.birdSpecies}</h3>
        <p>{props.birdSex}</p>
        <p>{props.birdCountry}</p>
        <p>{props.birdLocation}</p>
        <audio>{props.birdSound}</audio>
      </div>
    // </Link>
  )
}

export default BirdCard;