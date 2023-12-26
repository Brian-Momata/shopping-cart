import './DisplayProducts.css';
const DisplayProducts = ({ products, featured = true, }) => {
  return (
    <div className='products-container'>
        {featured && (<h2>Featured Products</h2>)}
        <section className="featured products">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))
          ) : featured ? (
            <p>No featured products to show</p>
          ) : (
            <p>No products found</p>
          )}
        </section>
      </div>
  );
}

export default DisplayProducts;