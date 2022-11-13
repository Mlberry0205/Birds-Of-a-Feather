
import React from 'react'
import BirdCard from '../BirdCards/BirdCards'
import { Link } from "react-router-dom";

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
      {!searchResults.length && (
        <div>
        <p>No results found.  Please try again.</p>
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