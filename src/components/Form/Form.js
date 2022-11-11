import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [search, setSearch] = useState('')

  const clearInputs = () => {
    setSearch('')
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
        <button>SEARCH</button>
          {/* <button onClick={}>SEARCH</button> */}
      </form>
    )
  }


export default Form;