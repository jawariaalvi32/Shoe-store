import React from 'react';
import '../App.css';
import Card from '../components/card'
import Header from '../components/header'


class ProductCard extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                    <Card/>
            </div>      
        )
    }
}


export default ProductCard;