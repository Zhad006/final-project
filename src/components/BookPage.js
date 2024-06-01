import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import './BookPage.css';

const BookPage = () => {
  const { bookId } = useParams();
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const book = books.find((b) => b.id === parseInt(bookId));

  return (
    <div className={`book-page ${theme}`}>
      {book ? (
        <>
          <img src={book.image} alt={book.title} />
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>${book.price}</p>
          <button onClick={() => addToCart(book)}>Добавить в корзину</button>
        </>
      ) : (
        <p>Книга не найдена</p>
      )}
    </div>
  );
};

export default BookPage;