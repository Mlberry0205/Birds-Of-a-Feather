import React, { useState } from 'react';
import './Form.css';

function Form({ handleClick }) {
  const [search, setSearch] = useState('')

 const handleSubmit = (event) => {
  event.preventDefault()
      setSearch('')
      handleClick(search.toLowerCase())
    }
  
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
          <button type='submit' onClick={(event) => handleSubmit(event)}>SEARCH</button>
          <p>Sounds available from: Brazil, Venezuela, & Trinidad & Tobago </p>
      </form>
      
    )
  }


export default Form;