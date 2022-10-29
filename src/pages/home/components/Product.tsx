import React, { FC } from 'react'
import LazyLoad from 'react-lazyload'
import { IProduct } from '../../../models/product'
import styles from './Product.module.scss'

interface Props {
  product: IProduct
}

const Product: FC<Props> = ({ product }): JSX.Element => {
  const handleBook = (): void => {}

  return (
    <div className={styles.container}>
      <LazyLoad throttle={200} height={'300rem'}>
        <img
          className={styles.image}
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          height={'300rem'}
          width="500rem"
        />
      </LazyLoad>

      <div className={styles.description}>
        <div className={styles.wrapper}>
          <div className={styles.one}>
            <h4 className={styles.name}>{product.name}</h4>
            <div className={styles.three}>
              <div className={styles.amount}>{product.price}$</div>
              <div className={styles.area}>{product.area}м²</div>
            </div>
          </div>
          <div className={styles.two}>
            <button className={styles.book} onClick={handleBook}>
              Book!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
