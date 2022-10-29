import React, { FC, lazy, Suspense } from 'react'
import Search from './components/Search'
import Navbar from '../../components/navbar/Navbar'
import pattern from '../../assets/header/pattern.svg'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from './Home.module.scss'

const SectionExplore = lazy(async () => await import('./components/SectionExplore'))
const SectionAbout = lazy(async () => await import('./components/SectionAbout'))

const Home: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <Navbar />
        </div>
        <div className={styles['hero-section']}>
          <h1 className={styles.title}>
            Rethink your <br /> living & renting
          </h1>
          <h2 className={styles.subtitle}>Make your stay painless with us</h2>
          <Search />
          <div className={styles['scroll-down-indicator']}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <img src={pattern} className={styles.mask} alt="mask" />
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <SectionExplore />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <SectionAbout />
      </Suspense>
      {/* TODO: move to layout */}
      <Footer />
    </>
  )
}

export default Home
