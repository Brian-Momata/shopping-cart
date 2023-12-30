import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, cart, updateCart }) => {
  if (!isOpen) return null;

  const orderTotal = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleRemoveFromCart = (item) => {
   const newCart = cart.filter(product => product.id !== item.id)
   updateCart(newCart);
  };

  return (
    <div className="cart-modal">
      <div className="modal-content">
        <ul className='cart-items'>
          {cart.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <span onClick={() => handleRemoveFromCart(product)}>&times;</span>
            </li>
          ))}
        </ul>
        <div className='order-total'>
          <p>Your order total is: <span>{orderTotal}</span></p>
        </div>
        <div className='action-buttons'>
          <button className="close-cart" onClick={onClose}>Continue Shopping</button>
          <button className="checkout">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
