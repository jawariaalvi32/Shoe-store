import React from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap'
import product from '../images/product1.jpg'
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
    
    state = {
        product : ''
    }

    addCart = (e) => {
console.log(e)    }
    render() {
        return (
            <div className="col-md-6 col-sm-12 mt-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Carman Salas Brown</Card.Title>
                        <Card.Text>
                            10.99
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.addCart(this)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>      
        )
    }
}


export default ProductCard;