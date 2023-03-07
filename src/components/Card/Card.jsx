import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ cardCover, cardTitle }) {
    return (
        <figure className="card_container">
            <Link to="/property" className="card_link">
                <img src={cardCover} alt={cardTitle} />
                <h2>{cardTitle}</h2>
            </Link>
        </figure>
    );
}

export default Card;
