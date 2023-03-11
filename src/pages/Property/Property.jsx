/* eslint-disable jsx-a11y/img-redundant-alt */
import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import Gallery from "../../components/Gallery/Gallery";
import Ratings from "../../components/Ratings/Ratings";
import Collapse from "../../components/Collapse/Collapse";
import "./Property.scss";

function Property() {
    const { id } = useParams();
    const location = useLocation();
    const url = location.pathname;

    // Récupération des données et du statut de l'erreur depuis le hook
    const { data, error } = useFetch("/logements.json");

    // Objet provenant des données correspondant à l'id de la page
    const property = data
        .filter((property) => property.id === id)
        .map((property) => property)[0];

    // Comparaison de l'id du logement avec l'url puis redirection éventuelle vers la page d'erreur
    async function controlUrl() {
        const res = await fetch("/logements.json");
        const data = await res.json();
        const allIds = data.map((property) => {
            return property.id;
        });
        const urlId = url.substring(10, 18);

        if (!allIds.includes(urlId)) {
            document.location.href = "/error";
        }
    }

    controlUrl();

    return error ? (
        <div className="error_container">Une erreur est survenue 😥</div>
    ) : (
        <div className="property_container">
            <Gallery data={property} id={id} />
            <section className="property_content">
                <header>
                    <h1>{property && property.title}</h1>

                    <p className="location">{property && property.location}</p>

                    <div className="tags_container">
                        {property &&
                            property.tags.map((tag) => (
                                <div className="tag" key={"tag-$" + tag}>
                                    {tag}
                                </div>
                            ))}
                    </div>
                    <Ratings ratingNumber={property && property.rating} />
                    <div className="identity_container">
                        <p>{property && property.host.name}</p>
                        <img
                            src={property && property.host.picture}
                            alt="Photo de l'hôte"
                        />
                    </div>
                </header>
                <Collapse
                    collapseTitle={"Description"}
                    collapseText={property && property.description}
                />
                <Collapse
                    collapseTitle={"Équipements"}
                    collapseText={property && property.equipments}
                />
            </section>
        </div>
    );
}

export default Property;
