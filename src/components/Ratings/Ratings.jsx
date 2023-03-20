import { useEffect, useState } from "react";
import starGrey from "../../assets/star_grey.png";
import starPrimary from "../../assets/star_primary.png";
import "./Ratings.scss";

function Ratings(props) {
    const [ratingNumber, setRatingNumber] = useState(props.ratingNumber);

    // Mise à jour de la note au chargement de la page et lors d'une modification de la note
    useEffect(() => {
        setRatingNumber(props.ratingNumber);
    }, [props.ratingNumber]);

    let starsArray = [];

    // starsArray est rempli avec 5 valeurs égales à 1 ou 0 en fonction de la note
    function createStars(number) {
        for (let i = 0; i < 5; i++) {
            if (i < number) {
                starsArray.push(1);
            } else {
                starsArray.push(0);
            }
        }
    }

    createStars(ratingNumber);

    return (
        <div className="ratings_container">
            {starsArray.map((star, index) => {
                // Une étoile est générée par valeur dans starsArray, rouge ou grise selon la valeur 1 ou 0
                return (
                    <img
                        src={star ? starPrimary : starGrey}
                        alt={star ? "Etoile rouge" : "Etoile grise"}
                        key={`star-${index}`}
                    />
                );
            })}
        </div>
    );
}

export default Ratings;
