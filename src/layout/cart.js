import React from 'react';
import '../App.css';
import Header from '../components/header'
import Cartbox from '../components/cartbox'


class Cart extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                <Cartbox/>
            </div>      
        )
    }
}


export default Cart;