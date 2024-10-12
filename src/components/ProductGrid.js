import React, { useEffect, useState } from 'react';
import './ProductGrid.css'; // Import the external CSS

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (

    
    <section className="container">
        
         <div className="row">

           {/* Left Column (Filter Section) */}
        <div className="filter-section">
          <div className="customize-section mb-3">
            <h5>
              <input type="checkbox" /> Customizable
            </h5>
          </div>

          {/* Deal For */}
          <div className="mb-3">
            <label htmlFor="dealFor" className="form-label">
              The Deal For
            </label>
            <select id="dealFor" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
          </div>

          {/* Occasion */}
          <div className="mb-3">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select id="occasion" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Casual</option>
              <option>Formal</option>
              <option>Party</option>
            </select>
          </div>

          {/* Work */}
          <div className="mb-3">
            <label htmlFor="work" className="form-label">
              Work
            </label>
            <select id="work" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Office</option>
              <option>Outdoor</option>
            </select>
          </div>

          {/* Fabric */}
          <div className="mb-3">
            <label htmlFor="fabric" className="form-label">
              Fabric
            </label>
            <select id="fabric" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Cotton</option>
              <option>Polyester</option>
              <option>Wool</option>
            </select>
          </div>

          {/* Segment */}
          <div className="mb-3">
            <label htmlFor="segment" className="form-label">
              Segment
            </label>
            <select id="segment" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Luxury</option>
              <option>Affordable</option>
            </select>
          </div>

          {/* Suitable For */}
          <div className="mb-3">
            <label htmlFor="suitableFor" className="form-label">
              Suitable For
            </label>
            <select id="suitableFor" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Adults</option>
              <option>Teenagers</option>
              <option>Kids</option>
            </select>
          </div>

          {/* Raw Materials */}
          <div className="mb-3">
            <label htmlFor="rawMaterials" className="form-label">
              Raw Materials
            </label>
            <select id="rawMaterials" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Cotton</option>
              <option>Silk</option>
              <option>Denim</option>
            </select>
          </div>

          {/* Pattern */}
          <div className="mb-3">
            <label htmlFor="pattern" className="form-label">
              Pattern
            </label>
            <select id="pattern" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Striped</option>
              <option>Checked</option>
              <option>Plain</option>
            </select>
          </div>
        </div>
        </div>
        {/* Products Grid Section */}
        <div className="items">
          <div className="cards">
            {products.map((product) => (
              <div key={product.id} className="card-container ">
                <div className="card ">
                  <img src={product.image} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    </section>
  );
};

export default ProductsSection;
