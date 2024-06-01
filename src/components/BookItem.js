import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.price.toFixed(2)} KZT</p>
      <p className="description">{book.description}</p>
      <a href={`/book/${book.id}`}>View Details</a>
    </div>
  );
};

export default BookItem;