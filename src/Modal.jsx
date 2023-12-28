import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, cart }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal">
      <div className="modal-content">
        <ul className='cart-items'>
          {cart.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
        <button className="close-cart" onClick={onClose}>Continue Shopping</button>
        <button className="checkout">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Modal;
