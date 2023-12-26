import DisplayProducts from "./DisplayProducts";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Shop = ({products}) => {
  return (
    <>
      <header>
        <h1>Enjoy Your Shopping!</h1>
        <ul className="navLinks">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            icon
          </li>
        </ul>
      </header>
      <DisplayProducts products={products} featured={false} />
      < Footer />
    </>
  );
}

export default Shop;