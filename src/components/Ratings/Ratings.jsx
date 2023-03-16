import starGrey from "../../assets/star_grey.png";
import starPrimary from "../../assets/star_primary.png";
import "./Ratings.scss";

function Ratings({ ratingNumber }) {
    let starsArrow = [];

    function createStars(number) {
        /*
        const remainingNumber = 5 - ratingNumber;
        for (let index = 0; index < number; index++) {
            starsArrow.push(1);
        }
        for (let index = 0; index < remainingNumber; index++) {
            starsArrow.push(0);
        }
        */
        for (let i = 0; i < 5; i++) {
            if (i < ratingNumber) {
                starsArrow.push(1);
            } else {
                starsArrow.push(0);
            }
        }
    }

    createStars(ratingNumber);

    return (
        <div className="ratings_container">
            {starsArrow.map((star, index) => {
                return (
                    <img
                        src={star ? starPrimary : starGrey}
                        alt="Etoile rouge"
                        key={`star-${index}`}
                    />
                ); /*: (
                    <img
                        src={starGrey}
                        alt="Etoile grise"
                        key={`star-${index}`}
                    />
                );*/
            })}
        </div>
    );
}

export default Ratings;
