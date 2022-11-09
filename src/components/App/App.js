
import Birds from '../BirdContainer/BirdContainer'
import BirdContainer from '../BirdContainer/BirdContainer'
import Navbar from '../Navbar/Navbar';
import { getBirds } from '../../apiCalls'
import { Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react'


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
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       birds: []
//     }
//   }

  // componentDidMount = () => {
  //   getBirds()
  //     .then(data => this.setState({ birds: data.recordings }))
  //     .catch(error => this.setState({ error: error }))
  // }

  // render() {
    return (
      <main className="App">
        <Navbar />
        <p>Sometimes I think that the point of birdwatching is not the actual seeing of the birds, but the cultivation of patience & the sounds of the bird.</p>
        {/* <Birds /> */}
        <Route exact path='/'
          render={() => <BirdContainer
            birds={ birds }
          />}
        />
      </main>
    )
  }
// }

export default App;
