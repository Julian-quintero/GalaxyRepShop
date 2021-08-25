import React from 'react';
import logo from './logo.svg';
  import Header from './components/header/Header'
  import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { CartScreen } from './screens/CartScreen';
import { LoginScreen } from './screens/LoginScreen';
import AlreadyLogged from './components/routes/AlreadyLogged';
import { useIsLogged } from './hooks/useIsLogged';

function App() {

 const {Name} = useIsLogged()
  
  return (
<Router>
<Header></Header>
<Route path="/" component={HomeScreen} exact></Route>
<Route path="/product/:id" component={DetailsScreen}></Route>
<Route path="/cart/:id?" component={CartScreen}></Route>
<AlreadyLogged isAuthenticated={Name} component={ LoginScreen} path="/login">



</AlreadyLogged>

{/* <Route path="/login" component={LoginScreen}></Route> */}
</Router>
    
  );
}

export default App;
