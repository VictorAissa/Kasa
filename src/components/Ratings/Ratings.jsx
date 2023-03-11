import starGrey from "../../assets/star_grey.png";
import starPrimary from "../../assets/star_primary.png";
import "./Ratings.scss";

function Ratings({ ratingNumber }) {
    const remainingNumber = 5 - ratingNumber;
    let starsArrow = [];

    function createStars(number) {
        for (let index = 0; index < number; index++) {
            starsArrow.push(1);
        }
        for (let index = 0; index < remainingNumber; index++) {
            starsArrow.push(0);
        }
    }
    createStars(ratingNumber);

    return (
        <div className="ratings_container">
            {starsArrow.map((star, index) => {
                return star ? (
                    <img
                        src={starPrimary}
                        alt="Etoile rouge"
                        key={`star-${index}`}
                    />
                ) : (
                    <img
                        src={starGrey}
                        alt="Etoile grise"
                        key={`star-${index}`}
                    />
                );
            })}
        </div>
    );
}

export default Ratings;
