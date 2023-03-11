import { useEffect, useState } from "react";
import "./Gallery.scss";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

function Gallery(props) {
    const property = props.data;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Tableau contenant les images du logement
    const pictures =
        property &&
        property.pictures.map((picture) => {
            return picture;
        });

    const alt = property && property.title;
    const id = property && property.id;
    const totalSlides = pictures && pictures.length;

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
            {pictures &&
                pictures.map((picture, index) => (
                    <img
                        key={`property ${id} - photo ${index}`}
                        src={picture}
                        alt={alt}
                        // Translation des images de leur largeur * l'index de la slide courante
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    />
                ))}

            {/* Création des éléments de navigation entre les slides si le slider comprend plus d'une image */}
            {totalSlides > 1 ? (
                <nav>
                    <img
                        src={arrowLeft}
                        alt="Flèche gauche"
                        onClick={() => {
                            previousSlide();
                        }}
                    />
                    <div className="numbering_container">
                        {currentSlide + 1}/{totalSlides}
                    </div>
                    <img
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
