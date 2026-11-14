import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleShowCart = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleShowHome = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  return (
    <div className="App">
      {!showProductList && !showCart && (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Donde la naturaleza y el diseño se encuentran</p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Comenzar
          </button>
          <div style={{ marginTop: '3rem' }}>
            <AboutUs />
          </div>
        </div>
      )}
      {showProductList && (
        <ProductList
          onShowHome={handleShowHome}
          onShowCart={handleShowCart}
        />
      )}
      {showCart && <CartItem onShowHome={handleShowHome} />}
    </div>
  );
}

export default App;