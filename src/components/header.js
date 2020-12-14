import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';


class Header extends React.Component {
    
    render() {
        return (
            <div className="mb-10">
                <Navbar collapseOnSelect expand="lg" bg="dark" className="fixed-top shadow-sm bg-dark" variant="dark">
                    <Navbar.Brand><Link to="/" className="link">STORE</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link><Link to="/cart" className="link">Cart</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>        
        )
    }
}


export default Header;