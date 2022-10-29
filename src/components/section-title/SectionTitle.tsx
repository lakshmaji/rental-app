import React, { FC } from 'react'
import styles from './SectionTitle.module.scss'

interface Props {
  title: string
  subtitle: string
}

const SectionTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles['title-container']}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </div>
  )
}

export default SectionTitle
