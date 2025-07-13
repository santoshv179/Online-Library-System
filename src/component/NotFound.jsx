import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound =()=>{
    return(
    <div className="not-found">
        <h1>404-Page not Found</h1>
        <Link to="/" className="back-home">Go Home</Link>
    </div>
    )
}

export default NotFound