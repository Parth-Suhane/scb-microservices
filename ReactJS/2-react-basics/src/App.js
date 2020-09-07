import React from 'react';
import Greet from './components/Greet';
import Box from './components/Box';
import Employee from './components/Employee';

const App = () => {
  return (
    <div>
      <h1>Hello ... React !!</h1>

      <hr/>

      <Greet/>
      <Box/>
      <Employee/>

    </div>
  );
};

export default App;