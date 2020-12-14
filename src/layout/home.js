import React from 'react';
import '../App.css';
import Card from '../components/card'
import Footer from '../components/footer';
import Header from '../components/header'


class ProductCard extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                <Card/> 
                <Footer/>  
            </div>      
        )
    }
}


export default ProductCard;