import Slideshow from "../../components/Slideshow/Slideshow";
import Ratings from "../../components/Ratings/Ratings";
import Collapse from "../../components/Collapse/Collapse";

function Property() {
    const propertyTitle = "Paris center, on the romantic Canal Saint-Martin";
    const descriptionText = "Lorem ipsum";
    const equipmentText = "Lorem ipsum";

    return (
        <div className="property_container">
            <Slideshow />
            <section className="property_content">
                <header>
                    <h1>{propertyTitle}</h1>
                    <p className="location"></p>
                    <div className="tags_container">
                        <div className="tag"></div>
                    </div>
                    <Ratings />
                </header>
                <Collapse
                    collapseTitle={"Description"}
                    collapseText={descriptionText}
                />
                <Collapse
                    collapseTitle={"Équipements"}
                    collapseText={equipmentText}
                />
            </section>
        </div>
    );
}

export default Property;
