import "./Banner.scss";

function Banner({ backgroundImage, altImage, title, bannerHeight }) {
    return (
        <div className="banner_container" style={bannerHeight}>
            <img src={backgroundImage} alt={altImage} />
            {title ? <h1>{title}</h1> : null}
        </div>
    );
}

export default Banner;
