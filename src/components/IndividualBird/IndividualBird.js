//Write out everything you want the individual bird 
// import React, {useState, useEffect} from 'react'
// import { getSingleBird } from '../../apiCalls'
import React from 'react'
import './IndividualBird.css'


// const IndividualBird = ({ selectedId }) => {
//   const [birdObject, setBirdObject] = useState({})

  // useEffect(() => {
  //   const findSelectedBird = () => {
  //     getSingleBird(selectedId).then((response) => {
  //       const obj = {
  //         id: response.recordings.id,
  //         country: response.recordings.cnt,
  //         location: response.recordings.loc,
  //         sex: response.recordings.sex,
  //         stage: response.recordings.stage,
  //         file: response.recordings.file
  //       }
  //       setBirdObject(obj)
  //     })
  //   }
  //   findSelectedBird()
  // }, [birdObject, selectedId])

  // const {id, country, location, sex, stage, file} = birdObject

  const individualBird = (props) => {

    console.log('cmon', props)
    return (
      <div className='individual-bird'>
        <h2 className='individual-country'>{props.recordings.cnt}</h2>
        <p className='individual-location'>{props.recordings.loc}</p>
        <p className='individual-sex'>{props.recordings.sex}</p>
        {/* <p>{stage}</p>
        <audio>{file}</audio> */}
      </div>
    )
  }
//  }