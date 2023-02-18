import React from 'react';
import BirdCard from '../BirdCards/BirdCards'
import './BirdContainer.css';

const Birds = ({birds}) => {
  const birdCards = birds?.map(bird => {
    const {rec, cnt, loc, id, 'file-name':fileName, file} = bird
    return (
      <BirdCard 
        rec={rec}
        country={cnt}
        location={loc}
        sound={fileName}
        id={id}
        key={id}
        file={file}
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