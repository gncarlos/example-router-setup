import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// Importing components
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {

  return (
    <div className="App">
      <Nav />
        <Route path='/home' component={Home} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />

    </div>
  );
}

export default App;
