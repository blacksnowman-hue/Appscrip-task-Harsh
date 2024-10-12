import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="Hero-grid">
      <div className='Hero'>
        <h2>DISCOVER OUR PRODUCTS</h2>
      </div>
      <p className='para'>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      <div className="filter-bar">
        <p className="item-count">3425 Items</p>
        
        <div className="recommendation">
          <label htmlFor="recommended">Recommended:</label>
          <select className="recommendation-dropdown">
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
            <option value="price-low-high">Price: Low to High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Hero;
