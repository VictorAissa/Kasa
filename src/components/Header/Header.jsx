import { Link } from "react-router-dom";
import logo from "../../assets/logo_primary.png";
import "./Header.scss";

function Header() {
    return (
        <div className="header_container">
            <Link to="/" className="logo_link">
                <img src={logo} alt="Logo Kasa"></img>
            </Link>
            <nav>
                <Link to="/" className="nav_link">
                    ACCUEIL
                </Link>
                <Link to="/about" className="nav_link">
                    A PROPOS
                </Link>
            </nav>
        </div>
    );
}

export default Header;
