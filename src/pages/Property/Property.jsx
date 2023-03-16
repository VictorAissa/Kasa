/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import { getData } from "../../utils/hooks";
import Gallery from "../../components/Gallery/Gallery";
import Ratings from "../../components/Ratings/Ratings";
import Collapse from "../../components/Collapse/Collapse";
import "./Property.scss";
import { useState, useEffect } from "react";

function Property() {
    const { id } = useParams();

    // Récupération des données et du statut de l'erreur via le hook personnalisé useFetch
    //const { data, error } = useFetch("/logements.json");
    const [data, setData] = useState();

    useEffect(() => {
        getData("/logements.json").then((data) => {
            const logement = data.find((data) => data.id === id);
            if (!logement) {
                document.location.href = "/error";
            }
            setData(logement);
        });
    }, []);

    // Objet provenant des données correspondant à l'id de la page
    /*
    const data = data
        .filter((data) => data.id === id)
        .map((data) => data)[0];
*/
    // Comparaison de l'id du logement avec l'url puis redirection éventuelle vers la page d'erreur
    // async function controlUrl() {
    //     const res = await fetch("/logements.json");
    //     const data = await res.json();
    //     const allIds = data.map((data) => {
    //         return data.id;
    //     });

    //     if (!allIds.includes(id)) {
    //         document.location.href = "/error";
    //     }
    // }

    // function controlUrl(properties) {
    //     const actualUrl = location.pathname;
    //     const allIds = properties.map((data) => {
    //             return data.id;
    //         });
    //     const urlId = actualUrl.substring(10, 18);
    //     console.log("actualUrl  " + actualUrl);
    //     console.log("allIds  " + allIds);
    //     console.log("urlId  " + urlId);

    //     if (!allIds.includes(urlId)) {
    //         document.location.href = "/error";
    //     }
    // }

    const equipmentsContent = (
        <ul>
            {data &&
                data.equipments.map((equipment) => {
                    return <li key={"equipment-" + equipment}>{equipment}</li>;
                })}
        </ul>
    );

    return (
        <div className="property_container">
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
                    <Ratings ratingNumber={data && data.rating} />
                    <div className="identity_container">
                        <p>{data && data.host.name}</p>
                        <img
                            src={data && data.host.picture}
                            alt="Photo de l'hôte"
                            // nom
                        />
                    </div>
                </header>
                <Collapse
                    collapseTitle={"Description"}
                    collapseText={data && data.description}
                />
                <Collapse
                    collapseTitle={"Équipements"}
                    collapseText={equipmentsContent}
                />
            </section>
        </div>
    );
}

export default Property;
