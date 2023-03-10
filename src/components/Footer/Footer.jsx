import logoWhite from "../../assets/logo_white.png";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer_container">
            <img src={logoWhite} alt="Logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
