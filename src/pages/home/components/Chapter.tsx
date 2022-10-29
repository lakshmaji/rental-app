import React, { FC } from 'react'
import { IChapter } from '../../../models/chapter'
import { classNames } from '../../../utils'
import styles from './Chapter.module.scss'

interface Props {
  chapter: IChapter
}

const Chapter: FC<Props> = ({ chapter }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.chapter, chapter.id % 2 === 0 ? styles.secondary : undefined)}
        style={{
          backgroundImage: `url(${chapter.imageUrl})`,
          height: `${chapter.height}rem`,
          minHeight: chapter.height,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className={styles.info}>
          <h2>{chapter.title}</h2>
          <p>{chapter.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Chapter
