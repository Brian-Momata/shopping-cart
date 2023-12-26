import { Link } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Footer from './Footer';

const NavLinks = () => {
  return (
    <nav className="navigation">
      <ul className="navLinks">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='shop'>Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = ({products}) => {  
  return (
    <>
      <header>
        <h1>Welcome to Our Shop</h1>
        <NavLinks />
      </header>
      <div>
        < Home products={products}/>
      </div>
      < Footer />
    </>
  );
};

export default App;
