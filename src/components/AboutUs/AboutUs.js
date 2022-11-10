import React from "react";
import "./AboutUs.css"
import birdPhoto from './beardedBell.png'
import southAmerica from './SouthAfrica.png'


const AboutUs = () => {
  return (
    <div>
      <h2>Our Purpose</h2>
      <p>
        The bearded bellbird can be found in Northern South America.  The male pictured is about 28 cm long with white plumage
        apart from a brown head and black wings.  At his throat hang several black, unfeathered wattles.  Most of the recordings
        in this app are all male bearded bellbirds.  The male has a loud, repeated metallic hammering call.  There are two 
        subspecies, the nominate subspecies is only found in northeastern Brazil, while the other subspecies occurs in Trinidad, 
        Venezuela, Colombia, Guyana, eastern Bolivia and northern Brazil.
      </p>
      <div>
        <img src={birdPhoto} alt={'male bearded bell'}/>
        <img src={southAmerica} alt={'Map of South America'}/>
      </div>
    </div>
  )
}

export default AboutUs