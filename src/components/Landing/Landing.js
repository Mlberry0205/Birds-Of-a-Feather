import React from "react";
import "./Landing.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='about-layout'>
      <h3 className='about-title'>Welcome to Birds of a Feather!</h3>
      <p className='about-title'>Use this site to listen and learn about the sounds of the bearded bellbird.</p>
      <div className='button-arrange'>
       <div className='cta-item'>
          <h3 className='cta-title'>Browse</h3>
          <p>Browse all recordings</p>
          <Link to='/allBirds'><button className='cta-buttons'>Browse</button></Link>
        </div>
          <div className='cta-item'>
          <h3 className='cta-title'>Learn</h3>
          <p>Learn more about the Beardedbell</p>
          <Link to='/Learn'><button className='cta-buttons'>Learn</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Landing