import React from 'react';
import './BirdCards.css'

const BirdCard = ({id, rec, country, location, sound}) => {

  return (
      <div className='card' id={id}>
        <h3 className='location'>{location}</h3>
        <p className='country'>{country}</p>
        <p className='country'>{rec}</p>
        <audio className='audio'
          src={`https://xeno-canto.org/${id}/download`} 
          controls
          >
          <a 
          href={`https://xeno-canto.org/${id}/download`}
          >
        Download audio
          </a>
        {sound}
        </audio>
      </div>
  )
}

export default BirdCard;

