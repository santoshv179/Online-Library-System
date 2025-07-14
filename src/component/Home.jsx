import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const books = useSelector((state) => state.books); 

  return (
    <div className="home">
      <h1>📖 Welcome to Online Library</h1>
      <p>Explore various book categories and discover popular books.</p>

      <h2>Categories:</h2>
      <ul>
        <li>Fiction</li>
        <li>Non-Fiction</li>
        <li>Sci-Fi</li>
      </ul>

      <h2>Popular Books</h2>
      <div className="card-grid">
        {books.map((book) => (
          <div key={book.id} className="card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <Link to={`/book/${book.id}`} className="view-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
