import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from '../layout/home'
import Cart from '../layout/cart'
import ProductContextProvider, { ProductContext } from "../context/ProductContext";
import CartContextProvider from "../context/CartContext";

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/cart" component={Cart}>
                    <Cart/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter;