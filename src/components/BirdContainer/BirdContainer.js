import React from 'react';
import BirdCard from '../BirdCards/BirdCards'
import './BirdContainer.css';

const Birds = ({ birds }) => {
  const birdCards = 
      birds.map(bird => {
      const { name } = bird.en
      const { sex } = bird.sex
      const { id } = bird.id
    return (
      <BirdCard 
        birdSpecies={name}
        birdSex={sex}
        id={id}
        key={id}
      />
    )
  })

  const displayAllBirds = () => {
    return (
      <div>
        { birdCards }
      </div>
    )
  }

  return (
    <section>
      { displayAllBirds() } 
    </section>
  )

}

export default Birds