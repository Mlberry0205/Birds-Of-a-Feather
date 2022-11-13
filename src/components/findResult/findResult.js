import React from 'react'
import BirdCard from '../BirdCards/BirdCards'
import { Link } from "react-router-dom";

const findSearch = ({searchResults}) => {
  const searchBirds = searchResults?.map(bird => {
    const {rec, cnt, loc, id, 'file-name':fileName} = bird
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
    <section className='bird'>
      {!searchResults.length && (
        <div>
        <p className='error'>No sounds found.  Please try another country.</p>
        <Link to="/">
        <button className='error-button'>Home</button>
      </Link>
        </div>
      )}
      {searchBirds}
    </section>
  )
}

export default findSearch