import { useEffect, useState } from "react";
import { getData } from "../../utils/functions";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import homeBannerBackground from "../../assets/cliff_image.png";
import "./Home.scss";

function Home() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    // Déclaration d'un objet contenant les props de la banniere de la page d'accueil
    const homeBannerContent = {
        backgroundImage: homeBannerBackground,
        imageAlt: "Falaise",
        height:
            window.screen.width < 1024
                ? { height: "110px" }
                : { height: "220px" },
        title: "Chez vous, partout et ailleurs",
    };

    // Récupération des données de tous les logements au chargement de la page et gestion des erreurs
    useEffect(() => {
        getData("/logements.json")
            .then((data) => {
                setData(data);
                setError(false);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }, []);

    return (
        <div className="home_container">
            <Banner bannerProps={homeBannerContent} />

            {/* Affichage d'un message d'erreur le cas échéant ou des cartes dans le cas contraire */}
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
