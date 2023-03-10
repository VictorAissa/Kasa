import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import homeBannerBackground from "../../assets/cliff_image.png";
import { useFetch } from "../../utils/hooks";
import "./Home.scss";

function Home() {
    const bannerAltImage = "Falaise";
    const bannerTitle = "Chez vous, partout et ailleurs";
    const { data, error } = useFetch("/logements.json");
    const homeBannerHeight =
        window.screen.width < 500 ? { height: "110px" } : { height: "220px" };

    return (
        <div className="home_container">
            <Banner
                backgroundImage={homeBannerBackground}
                altImage={bannerAltImage}
                title={bannerTitle}
                bannerHeight={homeBannerHeight}
            />

            {error ? (
                <div className="error_container">
                    Une erreur est survenue 😥
                </div>
            ) : (
                data.map((property) => (
                    <Card key={`card-${property.id}`} propertyData={property} />
                ))
            )}
        </div>
    );
}

export default Home;
