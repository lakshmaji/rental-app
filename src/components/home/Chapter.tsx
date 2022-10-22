import { IChapter } from './data/chapters';
import { FC } from 'react';

interface Props {
  chapter: IChapter;
}

const Chapter: FC<Props> = ({ chapter }) => {
  return (
    <div className="chapter-container">
      {/* <img className="image" src={chapter.image} alt={chapter.title} height={chapter.height}  /> */}
      <div className='image-container' style={{height: chapter.height}}>
      <div className='' style={{
        height: chapter.height,
        backgroundImage: `url(${chapter.imageUrl})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: 'contain',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100%',

      
      }}>
        {chapter.imageUrl}
      </div>

      </div>
      <div className="description">
        <h4 className="name">{chapter.title}</h4>
        <div className="info">{chapter.description}</div>
      </div>
    </div>
  );
};

export default Chapter;
