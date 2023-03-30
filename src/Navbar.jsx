import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="nav1">
            <Link to="/" className="navi">Home</Link><Link to="/Contacto" className="navi">Contacto</Link>
        </nav>
    )
}

export default Navbar;