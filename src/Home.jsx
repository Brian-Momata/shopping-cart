import './Home.css'

const Home = ({products}) => {
  const featuredProducts = products.filter((product) => product['rating'].rate >= 4);
  return (
    <main>
        <h2>Featured Products</h2>
        <section className="featured-products">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No featured products found</p>
          )}
        </section>
      </main>
  );
};

export default Home;