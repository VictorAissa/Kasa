import "./Banner.scss";

function Banner({ backgroundImage, imageAlt, title, bannerHeight }) {
    return (
        <div className="banner_container" style={bannerHeight}>
            <img src={backgroundImage} alt={imageAlt} />
            {title ? <h1>{title}</h1> : null}
        </div>
    );
}

export default Banner;
