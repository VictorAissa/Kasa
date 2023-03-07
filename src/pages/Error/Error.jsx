import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
    return (
        <div className="error_container">
            <p className="error_code">404</p>
            <p className="error_comment">
                Oups! La page que vous demandez n'existe pas
            </p>
            <Link to="/" className="error_link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default Error;
