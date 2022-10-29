import React from 'react'
import chapters from '../../../data/chapters'
import SectionTitle from '../../../components/section-title/SectionTitle'
import LazyLoad from 'react-lazyload'
import { IChapter } from '../../../models/chapter'
import Chapter from './Chapter'
import styles from './SectionAbout.module.scss'

const SectionAbout = (): JSX.Element => {
  return (
    <section id="about-us" className={styles.container}>
      <SectionTitle title="About Us" subtitle="Allow us to tell you a short story..." />

      <div className={styles.grid}>
        {chapters.map((chapter: IChapter) => {
          return (
            <LazyLoad key={chapter.id} height={`${chapter.height}rem`} offset={[-100, 0]}>
              <Chapter chapter={chapter} />
            </LazyLoad>
          )
        })}
      </div>
    </section>
  )
}

export default SectionAbout
