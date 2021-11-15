import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./common/Footer/Footer";
import Header from "./common/Header";
import AuthProvider from "./componets/contexts/AuthProvider";
import PrivateRoute from "./componets/PrivateRoute/PrivateRoute";
import About from "./pages/About/About";
import Dashbord from "./pages/Dashbord/Dashbord";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ProductGallery from "./pages/ProductGallery/ProductGallery";
import Registration from "./pages/Registration/Registration";
import WalletDetails from "./pages/WalletDetails/WalletDetails";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <ProductGallery></ProductGallery>
          </Route>
          <Route path="/product/:productId">
            <WalletDetails></WalletDetails>
          </Route>
          <PrivateRoute exact path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/dashboard">
            <Dashbord></Dashbord>
          </Route>
          <Route path="/">
           <Home></Home>
          </Route>
        </Switch>
          <Router>
          <Footer></Footer>
          </Router>
      </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
