import React from 'react'
import products from '../../../data/products'
import Product from './Product'
import SectionTitle from '../../../components/section-title/SectionTitle'
import styles from './SectionExplore.module.scss'

const SectionExplore = (): JSX.Element => {
  return (
    <section id="explore" className={styles.container}>
      <SectionTitle
        title="Explore"
        subtitle="From one-guest rooms to penthouses with pools and gardens"
      />
      <div className={styles.grid} id="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default SectionExplore
