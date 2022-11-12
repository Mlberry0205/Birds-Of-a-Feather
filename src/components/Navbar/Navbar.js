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
      <NavLink to="/AboutUs" className='about-us'>About Us</NavLink>
      <p className='tagline'>Sounds of the Bearded Bellbird</p>
      <img className='about-bird-cnt' src={southAmerica} alt={'Map of South America'}/> 
    </nav>
  )
}


export default Navbar