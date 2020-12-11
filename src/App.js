import './App.css';
import Router from './config/router'
import CartContextProvider from './context/CartContext';
import ProductContextProvider from './context/ProductContext';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
      </ProductContextProvider>
      </div>
  );
}

export default App;
