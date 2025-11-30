import React from 'react';
import { useCart } from '../context/CartContext';

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export function Checkout() {
  const { cartItems } = useCart();
  const total = calculateTotal(cartItems);

  if (cartItems.length === 0) {
    return (
      <main style={{ padding: '20px' }}>
        <h2>Carrito de Compras</h2>
        <p>Tu carrito está vacío. ¡Añade algo de nuestro delicioso menú!</p>
      </main>
    );
  }

  return (
    <main style={{ padding: '20px' }}>
      <h2>Resumen del Pedido</h2>
      
      {}
      <div style={{ border: '1px solid #ccc', padding: '15px' }}>
        {cartItems.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {}
      <h3 style={{ marginTop: '20px', textAlign: 'right' }}>
        Total a Pagar: ${total.toFixed(2)}
      </h3>

      {}
      <button 
        style={{ width: '100%', padding: '10px', backgroundColor: '#A0522D', color: 'white', border: 'none' }}
        onClick={() => alert('¡Lógica de pago de Stripe aquí!')}
      >
        Proceder al Pago
      </button>
    </main>
  );
}