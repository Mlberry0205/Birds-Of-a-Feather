// import React from 'react'
import './Navbar.css'
import logo from './bird-logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='navbar-link' to='/'>
        <img src={ logo } alt='Birds of a Feather logo' className='logo-img'/>
      </Link>
      <NavLink to='/savedSounds' className='savedSounds'>My Sounds</NavLink>
    </nav>
  )
}


export default Navbar