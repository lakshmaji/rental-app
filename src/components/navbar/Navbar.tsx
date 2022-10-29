import React from 'react'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../logo/Logo'

const Navbar = (): JSX.Element => {
  function classNames(...classes: any): string {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
  const scrollDirection = useScrollDirection()

  // TODO: rename
  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? 'navbg' : '',
        scrollDirection === 'down' ? 'hide' : '',
        scrollDirection === 'up' ? 'show' : '',
      )}
    >
      <Logo />
      <input type="checkbox" id="menuBtn" name="" />
      <label htmlFor="menuBtn" className="barIcon">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <ul>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#cities">Cities</a>
        </li>
        <li>
          <a href="#call">Call</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
