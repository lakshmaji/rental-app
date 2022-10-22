import chapters, { Chapter } from './data/chapters';
import SectionTitle from './SectionTitle';

const SectionAbout = () => {
  return (
    <section id="about" data-testid="about" className="about-us">
      <SectionTitle title="About Us" subtitle="Allow us to tell you a short story..." />
      

      <div className="container">
        
        {chapters.map((chapter: Chapter) => {
          return <div key={chapter.id} className="box"><div className={`item ${chapter.id % 2 === 0 ? 'incrwi': ''}`} style={{
            backgroundImage: `url(${chapter.imageUrl})`,
            height: `${chapter.height}rem`,
            minHeight: chapter.height,
            // backgroundSize: ''
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // width: '100vw',
            // height: '100vh'
    
          }}>
            {/* <img src="about-us/one.png" alt="" /> */}
            <div className='info'>
              <h2>{chapter.title}</h2>
              <p>{chapter.description}</p>
            </div>
          </div>
          </div>
        })}

      </div>
    </section>
  );
};

export default SectionAbout;
