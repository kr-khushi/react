import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Extra_Component/ProductCard";
import "../../style/product.css";

const Product = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        setData([]);
        console.log("Error while fetching product", err);
      });
  }, []);

  useEffect(() => {
    // Filter products based on the search query
    setFilteredProducts(
      data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default Product;
