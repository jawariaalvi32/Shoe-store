import React, {useContext, useState} from 'react';
import '../App.css';
import { CartContext } from '../context/CartContext';
import Checked from '../images/checkout.gif'
import { Button, Modal } from 'react-bootstrap';

const Checkout = () => {
    
    const cartContext = useContext(CartContext)
    const setCart = cartContext[1]
    const [show, setShow] = useState(false);

    const confirmCheckout = (e) => {
        e.preventDefault()
        setShow(!show)
        setCart([])
    }

        return (
            <div>
                <Button onClick={ confirmCheckout }>Checkout</Button>
                    <Modal show={show}>
                        <Modal.Body>
                            <button type="button" className="close mb-2" onClick={() => setShow(!show)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="text-center">
                            <img src={Checked} className="w-25" />
                            </div>
                            <p className="text-success text-center mt-3">Order Confirmed !</p>    
                        </Modal.Body>
                    </Modal>
            </div>  
        )
}

export default Checkout;