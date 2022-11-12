import React from 'react';
import './BirdCards.css'
// import { Link } from 'react-router-dom'

const BirdCard = ({id, species, rec, country, location, sound}) => {
  const findLocationKey = (location) => {
    if (location === 'Barbalha, Ceará') {
      return 'AYDQCSKTHG' 
    } else if (location === 'La Escalera, Sierra de Lema, Bolívar' && rec === 'Andrew Spencer') {
      return 'CDTGHVBGZP'
    } else if (location === 'Asa Wright Nature Centre' && rec === 'Dan Lane') {
      return 'WOEAFQRMUD'
    } else if (location === 'Sección Capital Gran Sabana, La Gran Sabana, Bolívar') {
      return 'JQSYKZHEMB'
    } else if (location === 'Pacatuba, State of Ceará') {
      return 'MXVQPUKGWW'
    } else if (location === 'Araguaína, State of Tocantins Campus UFT') {
      return 'LXKLWEDKEM'
    } else if (location === 'Serra da Aratanha, Pacatuba-CE, Ceará') {
      return 'YWWWUBVAJF'
    } else if (location === 'Marituba, Pará') {
      return 'NNCKQMBGPH'
    } else if (location === 'Ribeirão Cancela, Chapada das Mesas National Park, Carolina, Maranhão') {
      return 'WZSVLIHYQF'
    } else if (location === 'Upper escalera, Bolivar') {
      return 'OOECIWCSWV'
    } else if (location === 'La Escalera, Bolívar' && rec === 'Hans Matheve') {
      return 'VROUALCTKG'
    } else if (location === 'Quebrangulo, Alagoas') {
      return 'YTUXOCTUEM'
    } else if (location === 'La Escalera, Bolívar' && rec === 'Joe Klaiber') {
      return 'TNPOVFLZMY'
    } else if (location === 'La Escalera, Sierra de Lema, Bolívar' && rec === 'David Edwards') {
      return 'AFEHYCAHZR'
    } else if (location === 'Asa Wright Nature Centre' && rec === 'Uffe Damm Andersen') {
      return 'HWHDLZAAXE'
    }

  }
  return (
      <div className='card' id={id}>
        <h3>{species}</h3>
        <p>Recorder: {rec}</p>
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