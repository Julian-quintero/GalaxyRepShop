import React from 'react';
import logo from './logo.svg';
  import Header from './components/header/Header'
  import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { CartScreen } from './screens/CartScreen';

function App() {
  return (
<Router>
<Header></Header>
<Route path="/" component={HomeScreen} exact></Route>
<Route path="/product/:id" component={DetailsScreen}></Route>
<Route path="/cart/:id?" component={CartScreen}></Route>
</Router>
    
  );
}

export default App;
