import React, {useContext} from 'react';
import '../App.css';
import {Table} from 'react-bootstrap'
import {GrFormClose} from 'react-icons/gr'
import {CartContext} from '../context/CartContext'

const ProductCard = () => {
    
    const cartContext = useContext(CartContext)
    const cart = cartContext ? cartContext[0] : []
    console.log("In Cart",cartContext)
        return (
            <div className="container mt-5">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>PRODUCT</th>
                            <th>COLOR</th>
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                cart.map(item => (<div key={item.key}>
                                    <td className="text-muted">{this.props.count}</td>
                                    <td><img src={item.img[0]} alt="product" width="50px" height="10%"/></td>
                                    <td>dd</td>
                                    <td><input type="number" min="1" max="4" step="1" value="1"/></td>
                                    <td className="text-muted">{item.price}</td>
                                    <td><GrFormClose/></td>
                                </div>
                                ))
                            }
                        </tr>
                    </tbody>
                </Table>
            </div>      
        )
    
}


export default ProductCard;