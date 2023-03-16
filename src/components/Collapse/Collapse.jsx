import { useState } from "react";
import arrowDown from "../../assets/arrow_down.png";
import arrowUp from "../../assets/arrow_up.png";
import "./Collapse.scss";

function Collapse({ collapseTitle, collapseText }) {
    const [isDeployed, setIsDeployed] = useState(false);
    const collapseArrow = isDeployed ? arrowUp : arrowDown;

    return (
        <article className="collapse_container">
            <header>
                <h2>{collapseTitle}</h2>
                <img
                    src={collapseArrow}
                    alt="Flèche"
                    onClick={() => {
                        isDeployed ? setIsDeployed(false) : setIsDeployed(true);
                    }}
                />
            </header>
            {isDeployed ? (
                <div className="collapse_content">{collapseText}</div>
            ) : null}
        </article>
    );
}

export default Collapse;
