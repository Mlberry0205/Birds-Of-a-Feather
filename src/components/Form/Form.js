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
          placeholder='Search recordings...'
          name='search'
          value={search}
          onChange={event => setSearch(event.target.value)}
          required
        />
          <button type='submit' disabled={!search} onClick={(event) => handleSubmit(event)}>RESULTS</button>
          <p className='availableSounds'>Search a bellbird by a specific location or recorder </p>
      </form>  
    )
  }


export default Form;