import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';
import './AdminPage.css';

const AdminPage = () => {
  const { books, addBook, deleteBook } = useContext(BookContext);
  const { theme } = useContext(ThemeContext);
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '', description: '', image: '' });

  const handleAddBook = (event) => {
    event.preventDefault();
    addBook(newBook);
    setNewBook({ title: '', author: '', price: '', description: '', image: '' });
  };

  return (
    <div className={`admin-page ${theme}`}>
      <h1>Admin Page</h1>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          placeholder="Author"
          required
        />
        <input
          type="number"
          value={newBook.price}
          onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
          placeholder="Price"
          required
        />
        <textarea
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          placeholder="Description"
          required
        />
        <input
          type="text"
          value={newBook.image}
          onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
          placeholder="Image URL"
          required
        />
        <button type="submit">Добавить книги</button>
      </form>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <button onClick={() => deleteBook(book.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;