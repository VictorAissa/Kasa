import { useState } from "react";
import "./Slideshow.scss";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () =>
        setCurrentSlide(
            currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
        );

    const nextSlide = () =>
        setCurrentSlide(
            currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
        );

    const pictures = [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
    ];
    const alt = "Appartement cosy";

    return (
        <div
            className="slideshow_container"
            style={{ gridTemplate: `100% / repeat(${pictures.length}, 100%)` }}
        >
            {pictures.map((picture) => (
                <img
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
export default Slideshow;
