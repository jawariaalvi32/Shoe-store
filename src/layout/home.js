import React from 'react';
import '../App.css';
import Card from '../components/card'
import Header from '../components/header'


class ProductCard extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                <div className="container mt-5">
                    <div className="row">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>      
            </div>      
        )
    }
}


export default ProductCard;