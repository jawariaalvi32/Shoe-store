import React from 'react';
import '../App.css';
import Header from '../components/header'
import Cartbox from '../components/cartbox'
import Checkout from '../components/checkout'


class Cart extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                <Cartbox/>
                <Checkout/>
            </div>      
        )
    }
}


export default Cart;