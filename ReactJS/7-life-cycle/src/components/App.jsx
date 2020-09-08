import React,{useState} from 'react';
import Greet from './Greet';

const App = () => {

  const[status,setStatus]=useState(true);
  return (

    <div>

      <h1>Welcome</h1>


     
    
       {status?<Greet/>:null}
      <button onClick={e=>{setStatus(!status)}}>Add/Remove</button>
     
      
    </div>
  );
};

export default App;