import starGrey from "../../assets/star_grey.png";
import starPrimary from "../../assets/star_primary.png";
import "./Ratings.scss";

function Ratings() {
    return (
        <div className="ratings_container">
            <img src={starPrimary} alt="Etoile rouge" />
            <img src={starPrimary} alt="Etoile rouge" />
            <img src={starPrimary} alt="Etoile rouge" />
            <img src={starGrey} alt="Etoile grise" />
            <img src={starGrey} alt="Etoile grise" />
        </div>
    );
}

export default Ratings;
