import React from "react";
import "../styles/BookCard.css";

const BookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.cover} alt={`${book.title} cover`} />
    <h3>{book.title}</h3>
    <p>
      <strong>Author:</strong> {book.author}
    </p>
    <p>
      <strong>Publication Year:</strong> {book.publication}
    </p>
    <p>
      <strong>ISBN:</strong> {book.isbn}
    </p>
    <p>
      <strong>Description:</strong> {book.description}
    </p>
  </div>
);

export default BookCard;
