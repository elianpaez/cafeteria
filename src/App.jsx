// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Asegúrate de que TODAS estas rutas existen en src/pages/
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Checkout } from './pages/Checkout';

import Navbar from './components/Navbar'; // Asegúrate de que Navbar.jsx existe
import { CartProvider } from './context/CartContext'; // Asegúrate de que CartContext.jsx existe

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 - Página No Encontrada</h1>} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;