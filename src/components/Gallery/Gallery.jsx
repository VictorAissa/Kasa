import { useState } from "react";
import "./Gallery.scss";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

function Gallery(props) {
    const data = props.data;
    const id = props.id;
    const [currentSlide, setCurrentSlide] = useState(0);
    const pictures = data
        .filter((property) => property.id === id)
        .map((property) => property.pictures)
        .flat();

    const previousSlide = () =>
        setCurrentSlide(
            currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
        );

    const nextSlide = () =>
        setCurrentSlide(
            currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
        );

    const alt = "Appartement cosy";

    return (
        <div
            className="gallery_container"
            style={{ gridTemplate: `100% / repeat(${pictures.length}, 100%)` }}
        >
            {pictures.map((picture, index) => (
                <img
                    key={`property ${id} - photo ${index}`}
                    src={picture}
                    alt={alt}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                />
            ))}

            <nav>
                <img
                    src={arrowLeft}
                    alt="Flèche gauche"
                    onClick={() => {
                        previousSlide();
                        console.log(currentSlide);
                    }}
                />
                <img
                    src={arrowRight}
                    alt="Flèche droite"
                    onClick={() => {
                        console.log(currentSlide);
                        nextSlide();
                    }}
                />
            </nav>
        </div>
    );
}
export default Gallery;
