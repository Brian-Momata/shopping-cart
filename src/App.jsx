import { useState, useEffect } from 'react';
import Home from './Home';
import './App.css'

const NavLinks = () => {
  return (
    <nav className="navigation">
      <ul className="navLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Server Error.');

        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Our Shop</h1>
        <NavLinks />
      </header>
      <div>
        <Home products={productsData}/>
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Our Shop. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
