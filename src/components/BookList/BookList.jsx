import React from 'react';
import { useGlobalContext } from '../../context';
import Loading from "../Loader/Loader";
import { Link } from 'react-router-dom';
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""), // Removing /works/ to get only the ID
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : null, // Use null for missing covers
      total_editions: singleBook.edition_count || "N/A", // Total Edition Count
      first_publish_year: singleBook.first_publish_year || "Unknown" // First Publish Year
    };
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content'>
          {booksWithCovers.slice(0, 30).map((book, index) => (
            <div key={index} className="book-item">
              <div className="book-item-left">
                {book.cover_img ? (
                  <img
                    src={book.cover_img}
                    alt={book.title}
                    className="book-item-img"
                  />
                ) : (
                  <div className="fallback-img">Gambar Tidak Ditemukan</div>
                )}
              </div>
              <div className="book-item-right">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">
                  <strong>Author:</strong>{" "}
                  {book.author_name ? book.author_name.join(", ") : "Unknown"}
                </p>
                <p className="book-first-published">
                  <strong>First Published:</strong> {book.first_publish_year}
                </p>
                <p className="book-total-editions">
                  <strong>Total Editions:</strong> {book.total_editions}
                </p>
                {/* Link Button to BookDetail Page */}
                <Link to={`/book/${book.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
