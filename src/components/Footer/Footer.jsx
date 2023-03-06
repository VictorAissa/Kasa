import logoWhite from "../../assets/logo_white.png";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer_container">
            <img src={logoWhite} alt="Logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
