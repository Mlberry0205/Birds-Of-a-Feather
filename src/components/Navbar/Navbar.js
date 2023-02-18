import './Navbar.css'
import logo from './bird-logo.png'
import { Link, NavLink } from 'react-router-dom';
import southAmerica from './SouthAfrica.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='navbar-link' to='/'>
        <img src={ logo } alt='Birds of a Feather logo' className='logo-img'/>
      </Link>
      <NavLink to="/Learn" className='about-us'>Learn</NavLink>
      <NavLink to="/allBirds" className='about-us'>Browse</NavLink>
    </nav>
  )
}


export default Navbar