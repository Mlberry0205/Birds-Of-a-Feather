import './Navbar.css'
import logo from './bird-logo.png'
import { Link, NavLink } from 'react-router-dom';
import '@fontsource/montez'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='logo' to='/'>
        {/* <img src={ logo } alt='Birds of a Feather logo' className='logo-img'/> */}
        <h1 className='logo'>Birds of a Feather</h1>
      </Link>
      <div className='nav-buttons' >
        <NavLink to="/Learn" className='about-us'>Learn</NavLink>
        <NavLink to="/allBirds" className='about-us'>Browse</NavLink>
      </div>
    </nav>
  )
}


export default Navbar