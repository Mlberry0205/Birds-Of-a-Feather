import BirdContainer from '../BirdContainer/BirdContainer'
import Navbar from '../Navbar/Navbar';
import { getBirds } from '../../apiCalls'
import { Route, Switch, useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Landing from '../Landing/Landing';
import Form from '../Form/Form'
import FindResult from '../findResult/findResult'
// import PageNotFound from '../PageNotFound/PageNotFound'
import Learn from '../Learn/Learn'

function App() {
  const [birds, setBirds] = useState([])
  const [searchResults, setSearchResults] =useState([])
  const history = useHistory()

  useEffect(() => {
    const getBirdData = () => {
      getBirds()
      .then(response => {setBirds(response.recordings)})
      .catch(response => response)
    }
      getBirdData()
    }, [])

    const handleClick = (search) => {
      const searchResult = birds?.filter((bird) => {
        if (bird.cnt.toLowerCase() === search) {
          return bird
        } else if (bird.rec.toLowerCase() === search) {
          return bird
        } else if (bird.loc.toLowerCase() === search) {
          return bird
        }
      })
      setSearchResults(searchResult)
      history.push('/SearchResults')

    }

    return (
      <main className="App">
        <Navbar />
        <Route exact path="/" render={() => <Landing/>}/>
        <Route exact path="/Learn" render={() => <Learn/>}/>
        <Form handleClick={handleClick} birds={ birds }/>
        <Switch>
        <Route exact path='/allBirds'
          render={() => <BirdContainer
            birds={ birds }
          />}
        />
        <Route exact path="/SearchResults" render={() => <FindResult  
          searchResults={searchResults}/>}
       />
        {/* <Route path="/error" component={PageNotFound} /> */}
        {/* <PageNotFound/> */}
        {/* <Route path='*'>
            <h3>Error 404: Sorry, that page that doesn't exist.</h3>
        </Route> */}
       </Switch>
      </main>
    )
  }



export default App;
