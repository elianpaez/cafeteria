import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          ☕ La Cafetería de Vite
        </Link>
      </div>
      
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/menu" style={styles.link}>Menú</Link>
          </li>
          
          {}
          <li style={styles.navItem}>
            <Link to="/checkout" style={{...styles.link, ...styles.cartIcon}}>
              🛒 Carrito ({itemCount})
            </Link>
          </li>
          
          <li style={styles.navItem}>
            <Link to="/login" style={{...styles.link, ...styles.authButton}}>
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


const styles = {
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '20px',
  },
  
  cartIcon: {
    position: 'relative', 
    fontWeight: 'bold',
    backgroundColor: '#98FB98', 
    color: '#000', 
  }
};

export default Navbar;