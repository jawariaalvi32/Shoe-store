import React from 'react';
import '../App.css';
import {Table} from 'react-bootstrap'
import {GrFormClose} from 'react-icons/gr'
import product from '../images/product1.jpg'


class ProductCard extends React.Component {
    
    render() {
        return (
            <div className="container mt-5">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td><img src={product} alt="product" width="50px" height="10%"/></td>
                        <td><input type="number" min="1" max="4" step="1" value="1"/></td>
                        <td className="text-muted">19.99</td>
                        <td><GrFormClose/></td>
                        </tr>
                    </tbody>
                </Table>
            </div>      
        )
    }
}


export default ProductCard;