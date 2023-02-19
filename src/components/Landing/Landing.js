import React from "react";
import "./Landing.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='about-container'>
      <h3 className='cta-title'>Welcome</h3>
      {/* <p className='about-title'>Use this site to listen and learn about the sounds of the bearded bellbird.</p> */}
      <div className='cta-section'>
       <div className='cta-item'>
          {/* <h3 className='cta-title'>Browse</h3> */}
          <p>Browse recordings</p>
          <Link to='/allBirds'><button className='cta-buttons'>Browse</button></Link>
        </div>
        <div className='cta-item'>
          {/* <h3 className='cta-title'>Learn</h3> */}
          <p>About the Beardedbell</p>
          <Link to='/Learn'><button className='cta-buttons'>Learn</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Landing