import React from 'react';
import Features from './Features';
import './styles/ProductDetails.scss';

const ProductDetails = () => {
  const features = [
    {
      title: 'Feature 1',
      img: '/assets/img/feature1-thumbnail.jpg',
      index: 1,
    },
    {
      title: 'Feature 2',
      img: '/assets/img/feature2-thumbnail.jpg',
      index: 2,
    },
    {
      title: 'Feature 3',
      img: '/assets/img/feature3-thumbnail.jpg',
      index: 3,
    },
  ];

  return (
    <main className="product-details">
      <div className="product-details__container container">
        <div className="product-details__description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem laboriosam ratione
            repellat eligendi esse deserunt non voluptatum doloremque explicabo ullam.
          </p>
        </div>
        <div className="product-details__features">
          <Features features={features} />
        </div>
        <div className="product-details__cta">
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
          <button type="button" className="button">Contact Us</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
