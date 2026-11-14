import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onShowHome }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <nav className="navbar">
        <button onClick={onShowHome}>Inicio</button>
        <button>Plantas</button>
        <button>Carrito ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</button>
      </nav>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="80" />
              <div>
                <h4>{item.name}</h4>
                <p>Precio unitario: ${item.price}</p>
                <p>Costo total: ${item.price * item.quantity}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total del Carrito: ${totalAmount.toFixed(2)}</h3>
          <button onClick={() => alert('Próximamente')}>Pagar</button>
          <button onClick={onShowHome}>Continuar Comprando</button>
        </div>
      )}
      <style>{`
        .cart-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid #ccc;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .quantity-controls button {
          width: 30px;
          height: 30px;
        }
      `}</style>
    </div>
  );
};

export default CartItem;