import React, { Component } from 'react';
import Birds from '../BirdContainer/BirdContainer'
import BirdContainer from '../BirdContainer/BirdContainer'
import Navbar from '../Navbar/Navbar';
import { getBirds } from '../../apiCalls'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birds: []
    }
  }

  componentDidMount = () => {
    getBirds()
      .then(data => this.setState({ birds: data.recordings }))
      .catch(error => this.setState({ error: error }))
  }

  render() {
    return (
      <main className="App">
      <Navbar />
       <h1>Birds of a feather</h1>
       <p>Sometimes I think that the point of birdwatching is not the actual seeing of the birds, but the cultivation of patience & the sounds of the bird.</p>
       <Birds />
      </main>
    )
  }
}

export default App;
