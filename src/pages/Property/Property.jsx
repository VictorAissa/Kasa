/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/functions";
import Gallery from "../../components/Gallery/Gallery";
import Ratings from "../../components/Ratings/Ratings";
import Collapse from "../../components/Collapse/Collapse";
import "./Property.scss";

function Property() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [error, setError] = useState(false);

    // Récupération des données de tous les logements au chargement de la page et au changement de l'id de la page, gestion des erreurs
    useEffect(() => {
        getData("/logements.json")
            .then((data) => {
                // Mise à jour de la constante data avec les données du logement correspondant à la page en cours
                const property = data.find((object) => object.id === id);
                if (!property) {
                    document.location.href = "/error";
                }
                setData(property);
                setError(false);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }, [id]);

    return (
        <div className="property_container">
            {/* Affichage d'un message d'erreur le cas échéant */}
            {error && <div>Une erreur est survenue 😥</div>}
            <Gallery data={data} />
            <section className="property_content">
                <header>
                    <h1>{data?.title}</h1>
                    <p className="location">{data?.location}</p>
                    <div className="tags_container">
                        {data?.tags.map((tag) => (
                            <div className="tag" key={"tag-" + tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <Ratings ratingNumber={data?.rating} />
                    <div className="identity_container">
                        {/* Séparation des nom et prénom de l'hôte avant affichage sur deux lignes */}
                        <p className="host_name">
                            {data?.host.name.split(" ")[0]}
                            <br />
                            {data?.host.name.split(" ")[1]}
                        </p>
                        <img src={data?.host.picture} alt={data?.host.name} />
                    </div>
                </header>
                <div className="collapse_wrapper">
                    <Collapse
                        collapseTitle={"Description"}
                        collapseText={data?.description}
                    />
                    <Collapse
                        collapseTitle={"Équipements"}
                        collapseText={data?.equipments}
                    />
                </div>
            </section>
        </div>
    );
}

export default Property;
