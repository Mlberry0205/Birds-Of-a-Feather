import React from 'react';
import BirdCard from '../BirdCards/BirdCards'
import './BirdContainer.css';

const Birds = (props) => {
  const birdCards = 
      props.birds.map(bird => {
      // const { name } = bird.en
      // const { sex } = bird.sex
      // const { id } = bird.id
      // const { country } = bird.cnt
      // console.log(bird.en)
      // console.log(bird.sex)
      // console.log(bird.cnt)
    return (
      <BirdCard 
        birdSpecies={bird.en}
        birdSex={bird.sex}
        birdCountry={bird.cnt}
        birdLocation={bird.loc}
        birdSound={bird['file-name']}
        id={bird.id}
        key={bird.id}
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
    <section className='birds-container'>
      { displayAllBirds() } 
    </section>
  )

}


export default Birds