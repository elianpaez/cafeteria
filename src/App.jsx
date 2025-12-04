import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Checkout } from './pages/Checkout';
import { CartProvider } from './context/CartContext'; 
import { AuthProvider } from './context/AuthContext'; 

function App() {
  return (
    <div className="App">
      
      {}
      <AuthProvider>
        
        {}
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
        {}

      </AuthProvider>
      {}
      
    </div>
    
  );
}

export default App;
