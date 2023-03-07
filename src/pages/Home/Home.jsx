import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import homeBannerBackground from "../../assets/cliff_image.png";
import { useFetch } from "../../utils/hooks";
import "./Home.scss";

function Home() {
    const bannerAltImage = "Falaise";
    const bannerTitle = "Chez vous, partout et ailleurs";
    const { data, error } = useFetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=20"
    );
    console.log(data);

    return (
        <div className="home_container">
            <div className="home_banner_wrapper">
                <Banner
                    backgroundImage={homeBannerBackground}
                    altImage={bannerAltImage}
                    title={bannerTitle}
                />
            </div>
            {error ? (
                <div className="error_container">
                    Une erreur est survenue 😥
                </div>
            ) : (
                data.map((property) => (
                    <Card cardCover={property.url} cardTitle={property.title} />
                ))
            )}
        </div>
    );
}

export default Home;
