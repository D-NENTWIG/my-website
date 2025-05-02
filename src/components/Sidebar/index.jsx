import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/LOGO.png'
import LogoSubtitle from '../../assets/images/NENTWIG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faFileContract,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return(
  <div className="nav-bar">
    <Link 
      className="logo" 
      to="/"
      onClick={() => setShowNav(false)}>
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="sub-logo" />
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink 
        exact="true" 
        activeclassname="active" 
        to="/"
        onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'about-link'}
        to="/about"
        onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'contact-link'}
        to="/contact"
        onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'cv-link'}
        to="/cv"
        onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faFileContract} color="#4d4d4e" />
      </NavLink>
      <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
    </nav>
    <ul>
      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://www.linkedin.com/in/david-nentwig/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      
      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://github.com/D-NENTWIG"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=1l8DVDo84CM"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://discordapp.com/users/219046654748131328"
        >
          <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
        </a>
      </li>
    </ul>
    <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
  </div>
  )
}

export default Sidebar
