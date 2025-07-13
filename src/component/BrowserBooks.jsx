import { useState } from "react";
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import "./BrowserBooks.css"




function BrowserBooks(){
    const {category} = useParams();
    const books = useSelector((state)=>state.books);
    const [search ,setSearch] = useState('')

    const filterBooks = books.filter(book=>{
        const matchCategory = !category || book.category.toLowerCase() === category.toLowerCase();
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase())||
                              book.author .toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchesSearch;
    })
    return(
        <div className="browse-books">
            <h2>Browser Books</h2>
            <input type="text" 
            placeholder="Search by Title or Author"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            />

            <ul>
                {filterBooks.map(book=>
                    <li key={book.id} className="book-card">
                        <strong>{book.title} </strong>by {book.author}
                        <Link to={`/book/${book.id}`}> View Details</Link>
                    </li>
                )}

            </ul>
        </div>
    )
}
export default BrowserBooks;
