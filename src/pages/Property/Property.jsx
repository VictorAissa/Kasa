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

    useEffect(() => {
        getData("/logements.json")
            .then((data) => {
                const property = data.find((data) => data.id === id);
                if (!property) {
                    document.location.href = "/error";
                }
                setData(property);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    });

    return (
        <div className="property_container">
            {error && <div>Une erreur est survenue 😥</div>}
            <Gallery data={data} />
            <section className="property_content">
                <header>
                    <h1>{data?.title}</h1>
                    <p className="location">{data?.location}</p>
                    <div className="tags_container">
                        {data?.tags.map((tag) => (
                            <div className="tag" key={"tag-$" + tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <Ratings ratingNumber={data?.rating} />
                    <div className="identity_container">
                        <p>{data?.host.name}</p>
                        <img src={data?.host.picture} alt={data?.host.name} />
                    </div>
                </header>
                <Collapse
                    collapseTitle={"Description"}
                    collapseText={data?.description}
                />
                <Collapse
                    collapseTitle={"Équipements"}
                    collapseText={data?.equipments}
                />
            </section>
        </div>
    );
}

export default Property;
