import { useEffect, useState } from "react";
import { getData } from "../../utils/functions";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import homeBannerBackground from "../../assets/cliff_image.png";
import "./Home.scss";

function Home() {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const homeBannerContent = {
        backgroundImage: homeBannerBackground,
        imageAlt: "Falaise",
        height:
            window.screen.width < 600
                ? { height: "110px" }
                : { height: "220px" },
        title: "Chez vous, partout et ailleurs",
    };

    useEffect(() => {
        getData("/logements.json")
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }, []);

    return (
        <div className="home_container">
            <Banner bannerProps={homeBannerContent} />

            {error ? (
                <div className="error_container">
                    Une erreur est survenue 😥
                </div>
            ) : (
                <div className="cards_wrapper">
                    {data?.map((property) => (
                        <Card
                            key={`card-${property.id}`}
                            propertyData={property}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
