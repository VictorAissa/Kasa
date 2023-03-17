import { useState } from "react";
import "./Banner.scss";

function Banner(props) {
    const [bannerProps, setBannerContent] = useState(props.bannerProps);
    return (
        <div className="banner_container" style={bannerProps.height}>
            <img src={bannerProps.backgroundImage} alt={bannerProps.imageAlt} />
            {bannerProps.title && <h1>{bannerProps.title}</h1>}
        </div>
    );
}

export default Banner;
