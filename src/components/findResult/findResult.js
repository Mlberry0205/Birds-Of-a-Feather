
import React from 'react'
import BirdCard from '../BirdCards/BirdCards'

const findSearch = ({searchResults}) => {
  console.log(searchResults)
  const searchBirds = searchResults?.map(bird => {
    const {rec, cnt, loc, id, 'file-name':fileName} = bird
    console.log(bird)
    return (
      <BirdCard 
        rec={rec}
        country={cnt}
        location={loc}
        sound={fileName}
        id={id}
        key={id}
      />
    )

  }
  )
  return (
    <section className='searchResults'>
      {searchBirds}
    </section>
  )
}

export default findSearch