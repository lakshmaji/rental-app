import React, { Fragment } from 'react';
import products from '../../data/products';
import Room from './Room';
import SectionTitle from './SectionTitle';

const ExploreSection = (): JSX.Element => {
  return (
    <section className="explore-container">
      <SectionTitle
        title="Explore"
        subtitle="From one-guest rooms to penthouses with pools and gardens"
      />
      <div className="row">
        {products.map((product) => (
          <Fragment key={product.id}>
            <Room product={product} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
