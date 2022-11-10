import React from 'react';
import './BirdCards.css'
// import { Link } from 'react-router-dom'

const BirdCard = (props) => {
  console.log('wtf', props)
  // console.log('getting it?', props.recordings.id)
  return (
    // <Link to={`/IndividualBird/${id}`} className='cards-container'>
      <div className='card' id={props.id}>
        <h3>{props.birdSpecies}</h3>
        <p>{props.birdSex}</p>
        <p>{props.birdCountry}</p>
      </div>
    // </Link>
  )
}

export default BirdCard;