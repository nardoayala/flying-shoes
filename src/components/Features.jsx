import React from 'react';
import '../styles/components/Features.scss';

const Features = (props) => {
  const { features } = props;

  const featureBoxes = features.map((feature) => {
    return (
      <div className='features__box' key={feature.index}>
        <img alt='Feature Thumbnail' className='features__box__thumbnail' src={feature.img} />
        <span className='features__box__title'>{feature.title}</span>
      </div>
    );
  });

  return (
    <div className='features'>
      {featureBoxes}
    </div>
  );
};
export default Features;
