import React from 'react'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../logo/Logo'
import { classNames } from '../../utils'
import styles from './Navbar.module.scss'
import CommonLinks from '../CommonLinks'

const Navbar = (): JSX.Element => {
  const scrollPosition = useScrollPosition()
  const scrollDirection = useScrollDirection()

  return (
    <nav
      className={classNames(
        styles.nav,
        scrollPosition > 0 ? styles.navbg : '',
        scrollDirection === 'down' ? styles.hide : '',
        scrollDirection === 'up' ? styles.show : '',
      )}
    >
      <Logo />
      <input type="checkbox" id="menuBtn" name="" className={styles.menuBtn} />
      <label htmlFor="menuBtn" className={styles.barIcon} id="barIcon">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <ul>
        <CommonLinks />
      </ul>
    </nav>
  )
}

export default Navbar
