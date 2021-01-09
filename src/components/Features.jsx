import React from 'react';
import PropTypes from 'prop-types';
import './styles/Features.scss';

const Features = (props) => {
  Features.defaultProps = {
    features: [],
  };

  Features.propTypes = {
    features: PropTypes.arrayOf(PropTypes.object),
  };

  const { features } = props;

  const featureBoxes = features.map((feature) => (
    <div className="features__box" key={feature.index}>
      <figure>
        <img alt="Feature Thumbnail" className="features__box__thumbnail" src={feature.img} />
      </figure>
      <span className="features__box__title">{feature.title}</span>
    </div>
  ));

  return (
    <div className="features">
      {featureBoxes}
    </div>
  );
};
export default Features;
