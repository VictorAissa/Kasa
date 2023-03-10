import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import Gallery from "../../components/Gallery/Gallery";
import Ratings from "../../components/Ratings/Ratings";
import Collapse from "../../components/Collapse/Collapse";
import "./Property.scss";

function Property() {
    const { id } = useParams();
    const { data, error } = useFetch("/logements.json");
    const property = data
        .filter((property) => property.id === id)
        .map((property) => property)[0];

    return (
        <div className="property_container">
            <Gallery data={data} id={id} />
            <section className="property_content">
                <header>
                    <h1>{property && property.title}</h1>

                    <p className="location">{property && property.location}</p>

                    <div className="tags_container">
                        {property &&
                            property.tags.map((tag) => (
                                <div className="tag">{tag}</div>
                            ))}
                    </div>
                    <Ratings />
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
