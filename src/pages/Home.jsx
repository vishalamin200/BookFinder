import React, { useState } from "react";
import "../styles/Home.css";
import BookSearchForm from "../components/BookSearchForm";
import BookCard from "../components/BookCard";
import toast from "react-hot-toast";

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    try {

      const response = fetch(`https://openlibrary.org/search.json?${query}`);

      toast.promise(response,{
        loading:"Fetching Book...",
        success:"Book Fetched Successfully",
        error:(err)=>err?.response?.data?.message || "Error In Fetching Book"
      })

      const res= await response
      const data = await res.json();
      
      const booksData = data.docs.slice(0, 10).map((book) => ({
        title: book.title,
        author: book.author_name?.join(", ") || "Unknown Author",
        cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
        publication: book.first_publish_year || "Unknown",
        description:
          book.subject?.slice(0, 5).join(", ") || "No description available.",
        isbn: book.isbn?.[0] || "N/A",
      }));

      setBooks(booksData);

    } catch (error) {

      console.error("Error fetching book data:", error);
      setBooks([]);
      
    }
  };

  return (
    <div className="home">
      <header>
        <h1>📚 Book Finder</h1>
        <p>Find your favorite books by title, author, or ISBN.</p>
      </header>
      <BookSearchForm onSearch={handleSearch} />
      <div className="book-results">
        {books.length > 0 ? (
          books.map((book, index) => <BookCard key={index} book={book} />)
        ) : (
          <p className="no-results">
            No books found. Try searching for something else!
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
