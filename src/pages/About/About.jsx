import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutBannerBackground from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
import "./About.scss";

function About() {
    // Objet contenant les props de la banniere de la page About
    const aboutBannerContent = {
        backgroundImage: aboutBannerBackground,
        imageAlt: "Paysage montagneux",
        height: { height: "220px" },
    };

    return (
        <div className="about_container">
            <Banner bannerProps={aboutBannerContent} />

            <div className="collapse_wrapper">
                <Collapse
                    collapseTitle={"Fiabilité"}
                    collapseText={
                        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    }
                />
                <Collapse
                    collapseTitle={"Respect"}
                    collapseText={
                        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    }
                />
                <Collapse
                    collapseTitle={"Service"}
                    collapseText={
                        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    }
                />
                <Collapse
                    collapseTitle={"Sécurité"}
                    collapseText={
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    }
                />
            </div>
        </div>
    );
}

export default About;
