import { useState } from "react";
import arrowDown from "../../assets/arrow_down.png";
import arrowUp from "../../assets/arrow_up.png";
import "./Collapse.scss";

function Collapse({ collapseTitle, collapseText }) {
    const [isDeployed, setIsDeployed] = useState(false);
    const arrow = isDeployed ? arrowUp : arrowDown;

    return (
        <article className="collapse_container">
            <header>
                <h2>{collapseTitle}</h2>
                <img
                    src={arrow}
                    alt="Flèche"
                    onClick={() => {
                        isDeployed ? setIsDeployed(false) : setIsDeployed(true);
                    }}
                />
            </header>
            {isDeployed && (
                <div className="collapse_content">
                    {/* Disposition du contenu de Collapse en liste s'il contient plusieurs éléments */}
                    {Array.isArray(collapseText) ? (
                        <ul>
                            {collapseText.map((equipment) => {
                                return (
                                    <li key={"equipment-" + equipment}>
                                        {equipment}
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        collapseText
                    )}
                </div>
            )}
        </article>
    );
}

export default Collapse;
