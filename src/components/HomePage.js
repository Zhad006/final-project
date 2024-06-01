import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';
import './HomePage.css';

const HomePage = () => {
  const { books } = useContext(BookContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home-page ${theme}`}>
      <h1>Book Store</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <Link to={`/book/${book.id}`}>Посмотреть детали</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;