import React, { FC } from 'react'
import CommonLinks from '../CommonLinks'
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
        <CommonLinks />
      </ul>
    </footer>
  )
}

export default Footer
