import React, { FC } from 'react'
import styles from './Logo.module.scss'

interface Props {
  dark?: boolean
}
const Logo: FC<Props> = ({ dark = false }) => {
  return (
    <a href="/" className={[styles.logo, dark && styles.dark].join(' ')}>
      <img src="logo.webp" alt="logo" />
    </a>
  )
}

export default Logo
