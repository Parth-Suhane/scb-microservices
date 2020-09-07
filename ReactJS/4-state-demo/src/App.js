import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet';

const App = () => {
  return (
    <div className="container">
      <h1>Events-Demo</h1> <hr/>

      <Greet/>
    </div>
  );
};

export default App;