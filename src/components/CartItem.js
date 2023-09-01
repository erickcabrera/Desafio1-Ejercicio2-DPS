import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ cartItems, removeFromCart, updateQuantity }) => {
const handleRemoveFromCart = (id) => {
    removeFromCart(id);
};

const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(id, newQuantity);
};

const calculateTotal = () => {
    // Calcula el total de los productos en el carrito
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

return (
    <div className="cart">
    <h2>Carrito de Compras</h2>
    {cartItems.map((item) => (
        <div className="cart-items" key={item.id}>
        <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-quantity">
            <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.id)}
            />
            </div>
            <div className="cart-item-price">${item.price * item.quantity}</div>
        </div>
        <div className="cart-item-delete" onClick={() => handleRemoveFromCart(item.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </div>
    ))}
    <div className="total">
        <span>Total:</span>
        <span>${calculateTotal()}</span>
    </div>
    </div>
);
};

export default CartItem;