import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantsData = [
  {
    category: 'Purificadoras de Aire',
    plants: [
      { id: 1, name: 'Planta de Serpiente', price: 25, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=200' },
      { id: 2, name: 'Pothos Dorado', price: 18, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200' },
      { id: 3, name: 'Lengua de Suegra', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=200' },
      { id: 4, name: 'Palma de Bambú', price: 30, image: 'https://images.unsplash.com/photo-1616500163214-2f8c4b8d3d4e?w=200' },
      { id: 5, name: 'Lirio de la Paz', price: 28, image: 'https://images.unsplash.com/photo-1598899097563-6c1c1e1e1e1e?w=200' },
      { id: 6, name: 'Helecho de Boston', price: 20, image: 'https://images.unsplash.com/photo-1598531484513-2c6c1e1e1e1e?w=200' },
    ],
  },
  {
    category: 'Aromáticas y Fragantes',
    plants: [
      { id: 7, name: 'Lavanda', price: 15, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 8, name: 'Jazmín', price: 25, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 9, name: 'Menta', price: 10, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 10, name: 'Albahaca', price: 12, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 11, name: 'Romero', price: 14, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 12, name: 'Tomillo', price: 11, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
    ],
  },
  {
    category: 'Repelentes de Insectos',
    plants: [
      { id: 13, name: 'Citronela', price: 20, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 14, name: 'Caléndula', price: 16, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 15, name: 'Geranio', price: 22, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 16, name: 'Hierba Gatera', price: 18, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 17, name: 'Ajenjo', price: 19, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
      { id: 18, name: 'Nepeta', price: 17, image: 'https://images.unsplash.com/photo-1595505218563-2f7f9f8e5e5e?w=200' },
    ],
  },
];

const ProductList = ({ onShowHome, onShowCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    if (!isAdded(plant.id)) {
      dispatch(addItem(plant));
    }
  };

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <button onClick={onShowHome}>Inicio</button>
        <button>Plantas</button>
        <button onClick={onShowCart}>
          Carrito ({totalQuantity})
        </button>
      </nav>
      <h2>Catálogo de Plantas</h2>
      {plantsData.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded(plant.id)}
                >
                  {isAdded(plant.id) ? 'Añadido' : 'Agregar al Carrito'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-around;
          padding: 1rem;
          background-color: #2d6a4f;
        }
        .navbar button {
          background: none;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
        .plant-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          padding: 1rem;
        }
        .plant-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
        }
        .plant-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ProductList;