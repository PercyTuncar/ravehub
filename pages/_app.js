import { AuthProvider } from '../contexts/auth-context';
import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/login.css';
import '../styles/registro.css';
import "../styles/tienda.css";
import React, { useState } from 'react';
import { CartProvider } from '../contexts/CartContext';

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState(0);
  
  // Define una función para agregar elementos al carrito.
  function handleAddToCart() {
    setCartItems(cartItems + 1);
  }

  // Define una función para eliminar elementos del carrito.
  function handleRemoveFromCart() {
    setCartItems(cartItems - 1);
  }

  return (
    <AuthProvider>
       <CartProvider>
          <Navbar 
            cartItems={cartItems} 
            handleAddToCart={handleAddToCart} 
            handleRemoveFromCart={handleRemoveFromCart} 
          />
          <Component {...pageProps} />
       </CartProvider>

    </AuthProvider>
  );
}
