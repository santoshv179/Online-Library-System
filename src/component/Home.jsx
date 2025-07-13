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

      {/* ✅ Popular Books bhi Home me hi dikhani hai */}
      <h2>Popular Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <Link to={`/book/${book.id}`}> ➡️ View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

