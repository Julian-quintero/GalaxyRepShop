import React from 'react';
import logo from './logo.svg';
  import Header from './components/header/Header'
  import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen } from './screens/HomeScreen';

function App() {
  return (
<Router>
<Header></Header>
<Route path="/" component={HomeScreen} exact></Route>

</Router>
    
  );
}

export default App;
