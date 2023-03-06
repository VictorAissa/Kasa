import "./Banner.scss";

function Banner({ backgroundImage, altImage, title }) {
    return (
        <div className="banner_container">
            <img src={backgroundImage} alt={altImage} />
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;
