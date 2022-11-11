import React from 'react';
import './BirdCards.css'
// import { Link } from 'react-router-dom'

const BirdCard = (props) => {
  const findLocationKey = (connect) => {
    // console.log('country', props.birdCountry)
    const location = connect.birdCountry
    // console.log(connect.birdCountry)
    console.log('location', location)
    if (location === 'Brazil') {
      return 'AYDQCSKTHG'
    } else if (location === 'Venezuela') {
      return 'LXKLWEDKEM'
    } else {
      return 'WOEAFQRMUD'
    }
  }
  return (
      <div className='card' id={props.id}>
        <h3>{props.birdSpecies}</h3>
        <p>Sex: {props.birdSex}</p>
        <p>Country: {props.birdCountry}</p>
        <p>Location: {props.birdLocation}</p>
        <audio
          controls
            src={`//xeno-canto.org/sounds/uploaded/${findLocationKey(props)}/${props.birdSound}`}>
            <a 
              href={`//xeno-canto.org/sounds/uploaded/${findLocationKey(props)}/${props.birdSound}`}>
        Download audio
            </a>
        {props.birdSound}</audio>
      </div>
  )
}

export default BirdCard;

// controls
// src={`//xeno-canto.org/sounds/uploaded/AYDQCSKTHG/${props.birdSound}`}>
//     <a href={`//xeno-canto.org/sounds/uploaded/AYDQCSKTHG/${props.birdSound}`}>
//         Download audio
//     </a>