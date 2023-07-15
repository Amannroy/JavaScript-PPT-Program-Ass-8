import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const apiUrl = 'https://fakestoreapi.com/products';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        return response.json();
      })
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message);
      });
  };

  return (
    <div className="App">
      <h1>Product Display</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="product-container">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
