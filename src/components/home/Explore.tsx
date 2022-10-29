import React, { Fragment } from 'react'
import products from '../../data/products'
import Product from './Product'
import SectionTitle from './SectionTitle'

const ExploreSection = (): JSX.Element => {
  return (
    <section id="explore" className="explore-container">
      <SectionTitle
        title="Explore"
        subtitle="From one-guest rooms to penthouses with pools and gardens"
      />
      <div className="row">
        {products.map((product) => (
          <Fragment key={product.id}>
            <Product product={product} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default ExploreSection
