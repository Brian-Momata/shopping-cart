import { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from "./Modal";

const NavLinks = ({ cartData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="navigation">
        <ul className="navLinks">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <div className="cart-icon" onClick={openModal}>
              <ion-icon name="cart-outline"></ion-icon>
              {cartData.length > 0 && ( // Show the counter if items are present in the cart
                <span className="cart-counter">{cartData.length}</span>
              )}
            </div>
          </li>
        </ul>
      </nav>
      < Modal isOpen={isModalOpen} onClose={closeModal} cart={cartData} />
    </>
  );
};

export default NavLinks;