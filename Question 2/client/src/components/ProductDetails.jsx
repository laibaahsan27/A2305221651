import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="product-details">
        <div className="product-image"></div>
        <div className="product-info">
          <h1>{product.productName}</h1>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
