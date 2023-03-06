import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ cardCover, cardTitle }) {
    cardCover =
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";
    cardTitle = "Appartement cosy";

    return (
        <div className="card_container">
            <Link to="/property" className="card_link">
                <img src={cardCover} alt={cardTitle} />
                <h2>{cardTitle}</h2>
            </Link>
        </div>
    );
}

export default Card;
