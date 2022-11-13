import Birds from '../BirdContainer/BirdContainer'
import BirdContainer from '../BirdContainer/BirdContainer'
import Navbar from '../Navbar/Navbar';
import { getBirds } from '../../apiCalls'
import { Route, Switch, useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import AboutUs from '../AboutUs/AboutUs';
import Form from '../Form/Form'
import FindResult from '../findResult/findResult'
import PageNotFound from '../PageNotFound/PageNotFound'

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
        }
      })
      setSearchResults(searchResult)
      history.push('/SearchResults')

    }

    return (
      <main className="App">
        <Navbar />
        <Form handleClick={handleClick} birds={ birds }/>
        <Switch>
        <Route exact path="/AboutUs" render={() => <AboutUs/>}/>
        <Route exact path='/'
          render={() => <BirdContainer
            birds={ birds }
          />}
        />
        <Route exact path="/SearchResults" render={() => <FindResult  
          searchResults={searchResults}/>}
       />
        <Route path="/error" component={PageNotFound} />
        <PageNotFound/>
        <Route path='*'>
            <h3>Error 404: Sorry, that page that doesn't exist.</h3>
        </Route>
       </Switch>
      </main>
    )
  }



export default App;
