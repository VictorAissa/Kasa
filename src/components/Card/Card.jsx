import { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card(props) {
    const [property, setProperty] = useState(props.propertyData);

    const propertyUrl = "/property/" + property.id;
    return (
        <figure className="card_container">
            <Link to={propertyUrl} className="card_link">
                <img src={property.cover} alt={property.title} />
                <figcaption>
                    <h2>{property.title}</h2>
                </figcaption>
            </Link>
        </figure>
    );
}

export default Card;
