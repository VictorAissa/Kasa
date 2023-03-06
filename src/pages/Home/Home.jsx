import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import homeBannerBackground from "../../assets/cliff_image.png";
import "./Home.scss";

function Home() {
    const bannerAltImage = "Falaise";
    const bannerTitle = "Chez vous, partout et ailleurs";
    return (
        <div className="home_container">
            <Banner
                backgroundImage={homeBannerBackground}
                altImage={bannerAltImage}
                title={bannerTitle}
            />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Home;
