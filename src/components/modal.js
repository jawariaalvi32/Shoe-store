import React from 'react';
import '../App.css';
import { Button, Modal } from 'react-bootstrap';

const CheckoutModal = () => {

    const [state, setState] = React.useState(false);

    const showHideModal = () => {
        setState(!state)
    };
  


        return (
                <div>
                  <Button onClick={() => this.showHideModal()} className={this.props.class}>{this.props.text}</Button>
                    <Modal show={this.state.show}>
                        <Modal.Body>
                            <button type="button" className="close mb-2" onClick={() => this.showHideModal()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <p className="text-muted text-center mt-3">We won't share your personal details with anyone</p>    
                        </Modal.Body>
                    </Modal>
                </div>
        
        )
}

export default CheckoutModal