import { Link } from "react-router-dom";
import logo from "../../assets/logo_primary.png";
import "./Header.scss";

function Header() {
    return (
        <header className="header_container">
            <Link to="/" className="logo_link">
                <img src={logo} alt="Logo Kasa"></img>
            </Link>
            <nav>
                <Link to="/" className="nav_link">
                    accueil
                </Link>
                <Link to="/about" className="nav_link">
                    à propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
