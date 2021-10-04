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
import { RegisterScreen } from './screens/RegisterScreen';
import { ShippingScreen } from './screens/ShippingScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { PlacerOrder } from './components/placeOrder/PlacerOrder';


function App() {

 const {Name} = useIsLogged()

  
  return (
<Router>
<Header></Header>
<Route path="/" component={HomeScreen} exact></Route>
<Route path="/product/:id" component={DetailsScreen}></Route>
<Route path="/cart/:id?" component={CartScreen}></Route>


<AlreadyLogged path="/shipping" component={ShippingScreen}></AlreadyLogged>

<AlreadyLogged path="/payment" component={PaymentScreen}></AlreadyLogged>


<AlreadyLogged isAuthenticated={Name} component={LoginScreen} path="/login">
</AlreadyLogged>

<AlreadyLogged  component={PlacerOrder} path="/placeorder">
</AlreadyLogged>

<AlreadyLogged isAuthenticated={Name} component={RegisterScreen} path="/register">
</AlreadyLogged>

{/* <Route path="/login" component={LoginScreen}></Route> */}
</Router>
    
  );
}

export default App;
