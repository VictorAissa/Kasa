import starGrey from "../../assets/star_grey.png";
import starPrimary from "../../assets/star_primary.png";
import "./Ratings.scss";

function Ratings({ ratingNumber }) {
    let starsArray = [];

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
                return (
                    <img
                        src={star ? starPrimary : starGrey}
                        alt="Etoile rouge"
                        key={`star-${index}`}
                    />
                );
            })}
        </div>
    );
}

export default Ratings;
