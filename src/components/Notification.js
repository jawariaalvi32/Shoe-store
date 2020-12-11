import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdAddShoppingCart} from 'react-icons/md'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default function Notification(){

  const Foo = () => (
    <div>
    <span><MdAddShoppingCart className="text-info"/></span>
    <div  className="text-info">Added to cart</div>
    </div>
    )
  const notify = () => toast(<Foo/>);
  
  return (
    <div>
      <span onClick={notify}>Add to cart</span>
      <ToastContainer 
       autoClose={2000} 
       limit={3}
       position="bottom-right"
       transition={Slide}
       />
    </div>
  );
}