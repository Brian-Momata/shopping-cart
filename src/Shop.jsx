import DisplayProducts from "./DisplayProducts";
import Footer from "./Footer";
import NavLinks from "./NavLinks";

const Shop = ({ products, addToCart, cart, updateCart }) => {
  return (
    <>
      <header>
        <h1>Enjoy Your Shopping!</h1>
        < NavLinks cartData={cart} updateCart={updateCart}/>
      </header>
      <DisplayProducts products={products} featured={false} addToCart={addToCart} />
      < Footer />
    </>
  );
}

export default Shop;
