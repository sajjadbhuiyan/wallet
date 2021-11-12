import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./common/Footer/Footer";
import Header from "./common/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
           <Home></Home>
          </Route>
        </Switch>
          <Router>
          <Footer></Footer>
          </Router>
      </Router>
    
    </div>
  );
}

export default App;
