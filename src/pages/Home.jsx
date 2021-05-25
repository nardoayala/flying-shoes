import React from 'react';
import '../styles/pages/Home.scss';

const Home = () => (
  <>
    <div className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">Flying Shoes</h1>
      </div>
    </div>

    <main className="product-details">
      <div className="product-details__container container">
        <div className="product-details__description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            laboriosam ratione repellat eligendi esse deserunt non voluptatum
            doloremque explicabo ullam.
          </p>
        </div>
        <div className="features">
          <div className="features__box">
            <figure>
              <img
                alt="Feature Thumbnail"
                className="features__box__thumbnail"
                src="/assets/img/feature1-thumbnail.jpg"
              />
            </figure>
            <span className="features__box__title">Feature 1</span>
          </div>

          <div className="features__box">
            <figure>
              <img
                alt="Feature Thumbnail"
                className="features__box__thumbnail"
                src="/assets/img/feature2-thumbnail.jpg"
              />
            </figure>
            <span className="features__box__title">Feature 2</span>
          </div>

          <div className="features__box">
            <figure>
              <img
                alt="Feature Thumbnail"
                className="features__box__thumbnail"
                src="/assets/img/feature3-thumbnail.jpg"
              />
            </figure>
            <span className="features__box__title">Feature 3</span>
          </div>
        </div>

        <div className="product-details__cta">
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
          <button type="button" className="button">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  </>
);

export default Home;
