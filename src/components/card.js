import React, {useContext, useState} from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {ProductContext} from '../context/ProductContext'
import {CartContext} from '../context/CartContext'
import {Carousel} from 'react-bootstrap'
import Notification from './Notification';

const ProductCard =  () => {
    const productContext = useContext(ProductContext)
    const product = productContext ? productContext.product : []

    const cartContext = useContext(CartContext)
    const setCart = cartContext[1]

    const addCart = (product) => {
        setCart([...cartContext[0],product])
    }

    return (
            <div>
                <div className="container mt-5 mb-5">
                    <div className="row  d-flex justify-content-center">
                        {product.map(prod => <div key={prod.key}>
                            <div className="col-md-6 col-sm-12">
                            <Card style={{ width: '21rem' }} className="mt-3">
                                <Carousel>
                                    {
                                        prod.img.map((img, ind) => 
                                            <Carousel.Item key={ind}>
                                                <img key={ind}
                                                className="d-block w-100"
                                                src={img}
                                                alt="First slide"
                                                />
                                            </Carousel.Item> 
                                        )
                                    }
                                </Carousel>
                                    <Card.Body>
                                        <Card.Title>{prod.title}</Card.Title>
                                        <Card.Text>
                                        ${prod.price}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => addCart(prod)}><Notification/></Button>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>)}
                    </div>  
                </div>  
            </div>
              
        )
    
}


export default ProductCard;