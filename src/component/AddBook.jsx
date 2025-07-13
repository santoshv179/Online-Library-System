import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";  // ✅ Redux action import karo
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
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.description ||
      !form.rating
    ) {
      alert("All fields are required!");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/books");
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Book</h2>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      ></textarea>
      <input
        type="number"
        placeholder="Rating"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
