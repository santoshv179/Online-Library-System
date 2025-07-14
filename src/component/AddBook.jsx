import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";
import "./AddBook.css";

const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, category, description, rating } = form;
    if (!title || !author || !category || !description || !rating) {
      alert("All fields are required!");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/books");
  };

  return (
    <div className="add-book-wrapper">
      <form className="add-book-form" onSubmit={handleSubmit}>
        <h2>➕ Add New Book</h2>

        <input
          type="text"
          placeholder="Book Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Author Name"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category (e.g. Fiction)"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <textarea
          placeholder="Description"
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <input
          type="number"
          placeholder="Rating (1 - 5)"
          min="1"
          max="5"
          step="0.1"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
