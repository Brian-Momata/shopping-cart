import './DisplayProducts.css';

const DisplayProducts = ({ products, featured = true, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='products-container'>
      {featured && (<h2>Featured Products</h2>)}
      <section className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
              <div className="add-to-cart">
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
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
};

export default DisplayProducts;
