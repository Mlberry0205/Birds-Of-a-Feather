import React from 'react';
import './BirdCards.css'
// import { Link } from 'react-router-dom'

const BirdCard = ({id, species, sex, country, location, sound}) => {
  const findLocationKey = (location) => {
    if (location === 'Barbalha, Ceará') {
      return 'AYDQCSKTHG'
    } else if (location === 'La Escalera, Sierra de Lema, Bolívar') {
      return 'CDTGHVBGZP'
    } else if (location === 'Asa Wright Nature Centre') {
      return 'WOEAFQRMUD' || ' LXKLWEDKEM'
    }
  }
  return (
      <div className='card' id={id}>
        <h3>{species}</h3>
        <p>Sex: {sex}</p>
        <p>Country: {country}</p>
        <p>Location: {location}</p>
        <audio
          controls
           src={`//xeno-canto.org/sounds/uploaded/${findLocationKey(location)}/${sound}`} 
            >
            <a 
            href={`//xeno-canto.org/sounds/uploaded/${findLocationKey(location)}/${sound}`}
            >
        Download audio
            </a>
        {sound}
        </audio>
      </div>
  )
}

export default BirdCard;

// controls
// src={`//xeno-canto.org/sounds/uploaded/AYDQCSKTHG/${props.birdSound}`}>
//     <a href={`//xeno-canto.org/sounds/uploaded/AYDQCSKTHG/${props.birdSound}`}>
//         Download audio
//     </a>