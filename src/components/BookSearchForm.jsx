import React, { useState } from "react";
import "../styles/BookSearchForm.css";

const BookSearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    isbn: "",
    language: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = Object.entries(formData)
      .filter(([key, value]) => value.trim() !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    onSearch(query);
  };

  return (
    <form className="book-search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          name="author"
          placeholder="Author name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Book title"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="isbn">ISBN</label>
        <input
          id="isbn"
          type="text"
          name="isbn"
          placeholder="ISBN number"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="language">Language</label>
        <select id="language" name="language" onChange={handleChange}>
          <option value="">Any</option>
          <option value="eng">English</option>
          <option value="fre">French</option>
          <option value="ger">German</option>
          <option value="spa">Spanish</option>
        </select>
      </div>
      <button type="submit">Search Book</button>
    </form>
  );
};

export default BookSearchForm;