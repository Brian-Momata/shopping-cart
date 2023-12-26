import DisplayProducts from './DisplayProducts';

const Home = ({products}) => {
  const featuredProducts = products.filter((product) => product['rating'].rate >= 4);
  return (
    < DisplayProducts products={featuredProducts}/>
  );
};

export default Home;