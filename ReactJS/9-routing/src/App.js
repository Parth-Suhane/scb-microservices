import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import ListUsers from './components/ListUsers';
import Form from './components/Form';
const App = () => {
  return (

    <Router>
      <div className="container">

        <h1>Router Demo</h1> <hr />

        <div className="row">
          <div className="col-2">
            <Navibar />
          </div>

          <div className="col-10">

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/add" component={Form}/>
              <Route exact path="/list" component={ListUsers}/>
              <Route exact path="/list/:id" component={Form}/>
            </Switch>

          </div>


        </div>

      </div>
    </Router>
  );
};

export default App;