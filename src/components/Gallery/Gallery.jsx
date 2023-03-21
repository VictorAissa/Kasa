import { useState } from "react";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import "./Gallery.scss";

function Gallery(props) {
    const property = props.data;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Tableau contenant les images du logement
    const pictures = property?.pictures.map((picture) => {
        return picture;
    });

    const totalSlides = pictures?.length;

    // Fonctions de modification de l'index de la slide courante
    const previousSlide = () =>
        setCurrentSlide(
            currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
        );
    const nextSlide = () =>
        setCurrentSlide(
            currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
        );

    return (
        // MEP de l'ensemble des images dans le container du slider en ligne (grid)
        <div
            className="gallery_container"
            style={{ gridTemplate: `100% / repeat(${totalSlides}, 100%)` }}
        >
            {pictures?.map((picture, index) => (
                <img
                    key={`property ${property?.id} - photo ${index}`}
                    src={picture}
                    alt={property?.title}
                    // Translation des images de la valeur de leur largeur * la valeur de la slide courante
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                />
            ))}

            {/* Création des éléments de navigation entre les slides si le slider comprend plus d'une image */}
            {totalSlides > 1 ? (
                <nav>
                    <img
                        className="arrow"
                        src={arrowLeft}
                        alt="Flèche gauche"
                        onClick={() => {
                            previousSlide();
                        }}
                    />
                    <span className="numbering_container">
                        {currentSlide + 1}/{totalSlides}
                    </span>
                    <img
                        className="arrow"
                        src={arrowRight}
                        alt="Flèche droite"
                        onClick={() => {
                            nextSlide();
                        }}
                    />
                </nav>
            ) : null}
        </div>
    );
}
export default Gallery;
