import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';


class Header extends React.Component {
    
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand><Link to="/">STORE</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link><Link to="/cart">Cart</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>        
        )
    }
}


export default Header;