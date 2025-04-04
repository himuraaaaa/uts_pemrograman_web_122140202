import React from 'react';
import { useGlobalContext } from '../../context';
import Loading from "../Loader/Loader";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : null
    };
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {booksWithCovers.slice(0, 30).map((book, index) => (
            <Card key={index} className="book-card">
              {book.cover_img ? (
                <Card.Img variant="top" src={book.cover_img} alt={book.title} />
              ) : (
                <div className="fallback-img">
                  Gambar Tidak Tersedia
                </div>
              )}
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author_name ? book.author_name.join(', ') : "Unknown"}</Card.Text>
                <Link to={`/book/${book.id}`} className="btn btn-primary">
                  Lihat Selengkapnya
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
