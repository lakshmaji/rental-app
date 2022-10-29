import React, { FC } from 'react'
import Logo from '../logo/Logo'
import styles from './Footer.module.scss'

const year = new Date().getFullYear()

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles.copyright}>
        <Logo dark />
        <span className={styles['copyright-text']}>
          {' '}
          &copy; {year} Company Name All rights reserved
        </span>
      </div>
      <ul>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#null">Cities</a>
        </li>
        <li>
          <a href="tel:+919999999999">Call</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
