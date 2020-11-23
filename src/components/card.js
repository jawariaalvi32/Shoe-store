import React from 'react';
import '../App.css';
import {Card, Button, Table} from 'react-bootstrap'
import productImg from '../images/product1.jpg'
import pro from '../images/product2.jpg'
import pro2 from '../images/product3.jpg'
import { Link } from 'react-router-dom';
import CartBox from './cartbox';

class ProductCard extends React.Component {

    state = {
        product : [
            {id:1, title:'Carman Salas Brown', price:'10.99', img: productImg},
            {id:2, title:'Carman Salas Blue', price:'13.99', img: pro},
            {id:3, title:'Carman Salas Green', price:'9.99', img: pro2}
        ],
        cart : 0,
        count : 0
    }
    
    addCart = (e) => {
        this.setState({
            cart : this.state.cart + parseInt(e),
            count: this.state.count + 1
        });
    }
    render() {
        const {cart} = this.state;
        const {count} = this.state;

        return (
            <div>
                <div className="container mt-5">
                    <CartBox cart = {cart} count = {count}/>
                </div>
                <div className="container mt-5">
                    <div className="row  d-flex justify-content-center">
                        {this.state.product.map(prod => <div key={prod.key}>
                            <div className="col-md-6 col-sm-12">
                            <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top" src={prod.img} />
                                    <Card.Body>
                                        <Card.Title>{prod.title}</Card.Title>
                                        <Card.Text>
                                        {prod.price}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.addCart(prod.price)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>)}
                    </div>  
                </div>  
            </div>
              
        )
    }
}


export default ProductCard;