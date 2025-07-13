import {Link} from 'react-router-dom'
import "./Navbar.css"
const Navbar = ()=>{
   return( <nav className="navbar">
        <h2>📕Library</h2>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/books">Browser Books</Link>
            <Link to="/add-book">Add Book</Link>
        </div>
    </nav>
   )
}

export default Navbar;