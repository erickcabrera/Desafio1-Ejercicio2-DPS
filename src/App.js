import React, { useState } from 'react';
import productImage1 from './img/tapete.jpg';
import productImage2 from './img/balon.jpg';
import productImage3 from './img/mochila.jpg';
import productImage4 from './img/casco.jpg';
import productImage5 from './img/guantes.jpg';
import productImage6 from './img/bloque.jpg';
import productImage7 from './img/camiseta.jpg';
import productImage8 from './img/mochila-hidratacion.jpg';
import productImage9 from './img/luces.jpg';
import productImage10 from './img/saco.jpg';

import './App.css';
import ProductItem from './components/ProductItem';

const productos = [
  {
    id: 1,
    category: 'Yoga y Pilates',
    name: 'Tapete de Yoga',
    description: 'Tapete antideslizante para yoga y pilates',
    price: 35,
    image: productImage1
  },
  {
    id: 2,
    category: 'Futbol',
    name: 'Balón de Futbol',
    description: 'Balón oficial de futbol tamaño estándar',
    price: 30,
    image: productImage2
  },
  {
    id: 3,
    category: 'Mochilas deportivas',
    name: 'Mochila Deportiva',
    description: 'Mochila resistente para llevar tus objetos deportivos',
    price: 50,
    image: productImage3
  },
  {
    id: 4,
    category: 'Ciclismo',
    name: 'Casco de Ciclismo',
    description: 'Casco seguro y cómodo para ciclistas',
    price: 25,
    image: productImage4
  },
  {
    id: 5,
    category: 'Boxeo',
    name: 'Guantes de Boxeo',
    description: 'Guantes acolchados para entrenamiento de boxeo',
    price: 20,
    image: productImage5
  },
  {
    id: 6,
    category: 'Yoga y Pilates',
    name: 'Bloques de Yoga',
    description: 'Bloques de espuma para mejorar tus posturas de yoga',
    price: 35,
    image: productImage6
  },
  {
    id: 7,
    category: 'Futbol',
    name: 'Camiseta de Futbol',
    description: 'Camiseta oficial de tu equipo favorito',
    price: 30,
    image: productImage7
  },
  {
    id: 8,
    category: 'Mochilas deportivas',
    name: 'Mochila de Hidratación',
    description: 'Mochila con sistema de hidratación para deportes al aire libre',
    price: 50,
    image: productImage8
  },
  {
    id: 9,
    category: 'Ciclismo',
    name: 'Luces LED para Bicicleta',
    description: 'Conjunto de luces LED para visibilidad en ciclismo nocturno',
    price: 25,
    image: productImage9
  },
  {
    id: 10,
    category: 'Boxeo',
    name: 'Saco de Boxeo',
    description: 'Saco de entrenamiento pesado para practicar tus golpes',
    price: 20,
    image: productImage10
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="App">
      <div className="header">
        <h1 className="company-name">Jaguar Sport</h1>
      </div>
      <div className="content">
        <div className="products-container">
          {productos.map(producto => (
            <ProductItem
              key={producto.id}
              id={producto.id}
              category={producto.category}
              name={producto.name}
              description={producto.description}
              price={producto.price}
              image={producto.image}
              addToCart={addToCart}
            />
          ))}
        </div>
        <div className="cart">
          <h2>Carrito de Compras</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    const updatedCart = cart.map(cartItem =>
                      cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
                    );
                    setCart(updatedCart);
                  }}
                />
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <span>Total a Pagar:</span>
            <span className="total-amount">${totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;