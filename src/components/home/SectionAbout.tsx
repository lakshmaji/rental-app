import chapters, { } from '../../data/chapters'
import SectionTitle from './SectionTitle'
import LazyLoad from 'react-lazyload'
import { IChapter } from '../../models/chapter'

const SectionAbout = () => {
  return (
    <section id="about-us" data-testid="about" className="about-us">
      <SectionTitle title="About Us" subtitle="Allow us to tell you a short story..." />

      <div className="container">

        {chapters.map((chapter: IChapter) => {
          return <LazyLoad key={chapter.id} height={`${chapter.height}rem`} offset={[-100, 0]}> <div className="box"><div className={`item ${chapter.id % 2 === 0 ? 'incrwi' : ''}`} style={{
            backgroundImage: `url(${chapter.imageUrl})`,
            height: `${chapter.height}rem`,
            minHeight: chapter.height,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className='info'>
              <h2>{chapter.title}</h2>
              <p>{chapter.description}</p>
            </div>
          </div>
          </div>
          </LazyLoad>
        })}

      </div>
    </section>
  )
}

export default SectionAbout
