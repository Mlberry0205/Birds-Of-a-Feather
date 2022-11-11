
import Birds from '../BirdContainer/BirdContainer'
import BirdContainer from '../BirdContainer/BirdContainer'
import Navbar from '../Navbar/Navbar';
import { getBirds } from '../../apiCalls'
import { Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import AboutUs from '../AboutUs/AboutUs';
import Form from '../Form/Form'

function App() {
  const [birds, setBirds] = useState([])

  useEffect(() => {
    const getBirdData = () => {
      getBirds()
      .then(response => {setBirds(response.recordings)})
      .catch(response => response)
    }
      getBirdData()
    }, [])

    return (
      <main className="App">
        <Navbar />
        <Form />
        <Route exact path="/AboutUs" render={() => <AboutUs/>}/>
        <Route exact path='/'
          render={() => <BirdContainer
            birds={ birds }
          />}
        />
      </main>
    )
  }


export default App;
