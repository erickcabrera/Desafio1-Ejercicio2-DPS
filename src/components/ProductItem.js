import React, { useState } from 'react';

const ProductItem = ({ id, category, name, description, price,image, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity });
  };

  return (
    <div className="product-item">
     <div className="product-image">
      <img src={image} alt={name} /> 
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <p>${price}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart}>Agregar</button>
      </div>
    </div>
  );
};

export default ProductItem;