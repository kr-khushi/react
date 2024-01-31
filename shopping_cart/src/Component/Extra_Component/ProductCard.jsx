// ProductCard.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const truncatedDescription = description.substring(0, 100) + "...";

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, image },
    });
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className="product-description">{truncatedDescription}</p>
        <p className="product-category">{category}</p>
        <p className="product-rating">Rating: {rating.rate}</p>
        <p className="product-count">Count: {rating.count}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
