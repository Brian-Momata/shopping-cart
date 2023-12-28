import './App.css'
import Home from './Home';
import Footer from './Footer';
import NavLinks from './NavLinks';

const App = ({ products, cart, addToCart }) => {  
  return (
    <>
      <header>
        <h1>Welcome to Our Shop</h1>
        <NavLinks cartData={cart}/>
      </header>
      <div>
        < Home products={products} addToCart={addToCart}/>
      </div>
      < Footer />
    </>
  );
};

export default App;
