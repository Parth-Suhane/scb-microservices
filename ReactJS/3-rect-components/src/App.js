import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet'
import Products from './components/Products';
const Welcome = () => {

  let products = [
    { "id": 10, name: 'Pen', price: 45 },
    { "id": 11, name: 'Book', price: 321 },
    { "id": 12, name: 'Laptop', price: 76000 },
    { "id": 13, name: 'Mouse', price: 2500 },
    { "id": 14, name: 'Pen Drive', price: 1800 }
  ];

  let product= { "id": 10, name: 'Pen', price: 45 }

  return (
    <div className="container mt-3">


      <div className="card">
        <div className="card-header bg-info">App Component</div>
        <div className="card-body">
          <h1>App Component</h1> <hr />
        </div>

      </div>

      <hr />

      <Greet title="Goood Noon" />
      <hr/>

      <Products products={products}/>




    </div>
  );
};

export default Welcome;