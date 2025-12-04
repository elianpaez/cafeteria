import { useCart } from '../context/CartContext';

const products = [
    { id: 1, name: 'Espresso Doble', price: 6000.00 },
    { id: 2, name: 'Muffin de Arándanos', price: 5000.00 }
];

export function Menu() {
  const { addItemToCart } = useCart();

  return (
    <main style={{ padding: '20px' }}>
      <h2>Menú de la Cafetería ☕</h2>
      
      <div style={{ display: 'flex', gap: '40px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price.toFixed(2)}</p>
            {}
            <button onClick={() => addItemToCart(product)}>
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}