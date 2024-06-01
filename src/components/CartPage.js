import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`cart-page ${theme}`}>
      <h1>Корзина</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((book) => (
              <li key={book.id}>
                <img src={book.image} alt={book.title} />
                <div>
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                  <p>${book.price}</p>
                  <button onClick={() => removeFromCart(book.id)}>Удалить</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Очистить корзину</button>
        </>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  );
};

export default CartPage;