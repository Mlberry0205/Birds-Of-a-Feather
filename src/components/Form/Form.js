import React, { useState } from 'react';
import './Form.css';

function Form({ handleClick }) {
  const [search, setSearch] = useState('')

  const clearInputs = () => {
    setSearch('')
  }

  // const handleClick = (event) => {
  //   event.preventDefault()
  //   const searchResult = birds?.filter((bird) => {
  //     if (bird.cnt === search) {
  //       return bird
  //     }
  //   })
  //   console.log(searchResult)
  // }

    return (
      <form >
        <input 
          type='text'
          placeholder='Search by country'
          name='search'
          value={search}
          onChange={event => setSearch(event.target.value)}
          required
        />
          <button type='submit' onClick={(event) => handleClick(event, search)}>SEARCH</button>
      </form>
    )
  }


export default Form;