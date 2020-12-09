import React from 'react';
import '../App.css';
import Header from '../components/header'
import Cartbox from '../components/cartbox'
import Checkout from '../components/checkout'
import CartContextProvider from '../context/CartContext';


class Cart extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                <CartContextProvider>
                    <Cartbox/>
                </CartContextProvider>
                <Checkout/>
            </div>      
        )
    }
}


export default Cart;