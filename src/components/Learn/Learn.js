import React from "react";
import "./Learn.css"
import birdPhoto from './beardedBell.png'
// import { Link } from 'react-router-dom'

const Learn = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This site was created to listen and learn about the sounds of the bearded bellbird.  My inspiration came from Xeno-canto.  Xeno-canto is a website dedicated to sharing wildlife sounds from all over the world. This site  only contains sounds from the bearded bellbird.
      <h1>Aims</h1>
      Whether you are a research scientist, a birder, or simply curious about a sound that you heard out your kitchen window, we invite you to listen and explore the sound recordings in the collection.
      <h1>xeno-canto</h1>
      Xeno-canto's website is more than just a collection of recordings. It is also a collaborative project.  If you feel inspired, I invite you to checkout Xeno-cantos website.  You can share your own recordings, help identify mystery recordings, or share your expertise in the forums.</p>
       <a href={`https://xeno-canto.org/`}>Head to xeno-canto.org</a>   
      {/* <img className='about-bird-image' src={birdPhoto} alt={'male bearded bell'}/> */}
    </div>
  )
}

export default Learn