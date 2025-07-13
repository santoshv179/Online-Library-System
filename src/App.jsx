import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import BrowserBooks from "./component/BrowserBooks";
import BooksDetails from "./component/BookDetails";
import AddBook from "./component/AddBook";
import NotFound from "./component/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowserBooks />} />
        <Route path="/books/:category" element={<BrowserBooks />} />
        <Route path="/book/:id" element={<BooksDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
