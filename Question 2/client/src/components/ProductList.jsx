import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    productName: "Laptop 4",
    price: 1258,
    rating: 3.8,
    discount: 33,
    availability: "yes",
  },
  {
    id: 2,
    productName: "Laptop 13",
    price: 8686,
    rating: 3.22,
    discount: 24,
    availability: "out-of-stock",
  },
  {
    id: 3,
    productName: "Laptop 14",
    price: 9254,
    rating: 3,
    discount: 56,
    availability: "yes",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [category, setCategory] = useState("Laptop");
  const [company, setCompany] = useState("AMZ");
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([1, 10000]);
  const [availability, setAvailability] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleApplyFilters = () => {
    let filteredProducts = dummyProducts;

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating >= minRating &&
        (availability ? product.availability === availability : true)
    );

    if (sortBy) {
      filteredProducts.sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
    }

    setProducts(filteredProducts);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange([1, Number(e.target.value)]);
  };

  return (
    <div className="container">
      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              console.log("Category changed:", e.target.value);
              setCategory(e.target.value);
            }}
          >
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Mouse">Mouse</option>
            <option value="Laptop">Laptop</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="company">Company</label>
          <select
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="">All</option>
            <option value="AMZ">Amazon</option>
            <option value="FLP">Flipkart</option>
            <option value="SNP">Snapdeal</option>
            <option value="MYN">Myntra</option>
            <option value="AZO">AliExpress</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="minRating">Min Rating</label>
          <input
            type="number"
            id="minRating"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
          />
        </div>
        <div className="filter-item">
          <label htmlFor="availability">Availability</label>
          <select
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="">All</option>
            <option value="yes">In Stock</option>
            <option value="no">Out of Stock</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="priceRange">Price Range: ${priceRange[1]}</label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="sortBy">Sort By</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="discount">Discount</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="sortOrder">Sort Order</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="apply-filters" onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h2>{product.productName}</h2>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Discount: {product.discount}%</p>
              <p>Availability: {product.availability}</p>
              <Link
                to={`/product/${product.id}`}
                state={{ product }}
                className="view-details"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;
