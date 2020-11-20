import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../layout/home'
import Cart from '../layout/cart'

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/cart" component={Cart}/>
            </Router>
        )
    }
}

export default AppRouter;