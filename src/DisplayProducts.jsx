import './DisplayProducts.css';
const DisplayProducts = ({ products, featured = true, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  }
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
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
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