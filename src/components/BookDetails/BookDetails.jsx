import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URLDetail = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URLDetail}${id}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects, authors, created } = data;
          const newBook = {
            description: description ? (typeof description === "string" ? description : description.value) : "No description available",
            title: title || "No title available",
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : null,
            subject_places: subject_places?.length ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times?.length ? subject_times.join(", ") : "No subject times found",
            subjects: subjects?.length ? subjects.join(", ") : "No subjects found",
            created_date: created?.value || "No creation date available"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details: ", error.message);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            {book?.cover_img ? (
              <img src={book.cover_img} alt="cover img" />
            ) : (
              <div className="fallback-img">Gambar Tidak Tersedia</div>
            )}
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject: </span>
              <span>{book?.subjects}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Created Date: </span>
              <span>{book?.created_date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails