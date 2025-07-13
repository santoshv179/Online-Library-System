import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();  // ✅ Sahi Tarike Se useParams ka use
  const book = useSelector((state) =>
    state.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return <h2 className="not-found">Book not found</h2>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/books" className="back-link">⬅️ Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
