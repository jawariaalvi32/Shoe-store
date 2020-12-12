import React, {useContext} from 'react';
import '../App.css';
import {Table} from 'react-bootstrap'
import {GrFormClose} from 'react-icons/gr'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'
import Checkout from './checkout';
import {BiArrowBack} from 'react-icons/bi'
import '../App.css'
const ProductCard = () => {
    
    const cartContext = useContext(CartContext)
    const cart = cartContext[0]
    const setCart = cartContext[1]
    let total = 0

    const remove = (item) => {
        setCart(cart.splice(item, 1))
    }

    return (
            <div className="container mt-5 bg-lighter rounded p-5" >
                <h5 className="text-left mb-5">Shopping Cart</h5>

                {
                    (cart.length > 0) ? 
                    <Table size="sm">
                    <tbody>
                        {
                            cart.map(item => (<tr key={item.id}>
                                <div className="d-none">{total += parseInt(item.price)}</div>
                                <td className="w-15"><img src={item.img[0]} alt="product" width="100%"/></td>
                                <td className="align-middle">{item.title}</td>
                                <td  className="align-middle">{item.color[0]}</td>
                                <td  className="align-middle"><input type="number" min="1" max="4" step="1"/></td>
                                <td className="text-muted align-middle">${item.price} </td>
                                <td  className="align-middle"><span onClick={() => remove(item.id)}><GrFormClose/></span></td>
                            </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><p className="text-muted">Subtotal</p></td>
                            <td><h6>${total}</h6></td>
                            <td></td>

                        </tr>
                    </tfoot>
                </Table>:
                <p className="text-muted">Nothing to checkout</p>
                }
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-6 col-xs-12">
                    <Link to="/" className="d-flex"><BiArrowBack className="mt-1"/> Continue Shopping</Link>
                    </div>
                    <div className="col-md-6 col-xs-12 justify-content-end">
                    <Checkout/>
                    </div>
                    </div>
                </div>
            </div>      
        )
    
}


export default ProductCard;