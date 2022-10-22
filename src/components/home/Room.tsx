import { FC } from 'react';
import LazyLoad from 'react-lazyload';
import { IProduct } from '../../models/product';

interface Props {
  product: IProduct;
  onClick?: (_: number) => void;
}

const Product: FC<Props> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product.id);
    }
  };

  return (
    <div className="product-container">
                <LazyLoad throttle={200} height={'300rem'}>

      <img className="image" src={product.image} alt={product.name} style={{
        width: '100%',
        height:'100%',
        objectFit: "cover"
      }} height={'300rem'} width="500rem" />
      </LazyLoad>

      <div className="description">
        <div className="wrapper">
        <div className='one'>
          <h4 className="name">{product.name}</h4>
          <div className='three'>
            <div className="price">{product.price}$</div>
            <div className="size">{product.area}м²</div>
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

export default Product;
