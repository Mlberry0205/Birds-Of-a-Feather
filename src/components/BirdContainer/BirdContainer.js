import React from 'react';
import BirdCard from '../BirdCards/BirdCards'
import './BirdContainer.css';

const Birds = ({birds}) => {
  const birdCards = birds?.map(bird => {
    const {en, rec, cnt, loc, id, 'file-name':fileName} = bird
    return (
      <BirdCard 
        species={en}
        rec={rec}
        country={cnt}
        location={loc}
        sound={fileName}
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
    <section className='birds-container'>
      { displayAllBirds() } 
    </section>
  )

}


export default Birds