import { FC } from 'react';
import { IRoom } from './data/rooms';
import LazyLoad from 'react-lazyload';

interface Props {
  room: IRoom;
  onClick?: (_: number) => void;
}

const Room: FC<Props> = ({ room, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(room.id);
    }
  };

  return (
    <div className="room-container">
                <LazyLoad throttle={200} height={'300rem'}>

      <img className="image" src={room.image} alt={room.name} style={{
        width: '100%',
        height:'100%',
        objectFit: "cover"
      }} height={'300rem'} width="500rem" />
      </LazyLoad>

      <div className="description">
        <div className="wrapper">
        <div className='one'>
          <h4 className="name">{room.name}</h4>
          <div className='three'>
            <div className="price">{room.price}$</div>
            <div className="size">{room.area}м²</div>
          </div>
        </div>
        <div className='two'>
          <button className="button" onClick={handleClick}>
            Book!
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
