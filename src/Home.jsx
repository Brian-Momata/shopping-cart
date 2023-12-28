import DisplayProducts from './DisplayProducts';

const Home = ({ products, addToCart }) => {
  const featuredProducts = products.filter((product) => product['rating'].rate >= 4);
  return (
    < DisplayProducts products={featuredProducts} addToCart={addToCart} />
  );
};

export default Home;