import "./styles/notFoundStyle.css"
import Link from "next/link";

function NotFound() {
    return ( 
        <div className="not-found">
            <h2>Page is not found</h2>
            <br></br>
            <Link href="/" className="green-button">Home</Link>
        </div>
     );
}

export default NotFound;