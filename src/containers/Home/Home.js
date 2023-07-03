import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-bootstrap/Carousel';
import Feature from '../../components/Feature/Feature';
import './Home.css';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={1000} id="home">
      <Carousel.Item>
        <div className="slide slide1">
          <Feature lead1="Synchronization" head="Product Lifecycle Management" lead2="Monitoring" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide slide2">
          <Feature lead1="data" head="Product Lifecycle Management" lead2="technology" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide slide3">
          <Feature lead1="people" head="Product Lifecycle Management" lead2="process" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide slide4" />
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide slide5">
          <Feature lead1="tools" head="Product Lifecycle Management" lead2="methods" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
