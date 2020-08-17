import React from "react";
import { Link } from "react-router-dom";

const SingleElement = ({ elContent }) => {
  const bottomClass = elContent.ypos === 9 || elContent.ypos === 10;
  const colorClass = elContent.category.split(" ").join("");

  return (
    <Link to={`/details/${elContent.number}`}>
      <div
        className={
          bottomClass
            ? `tableElement tableElementBottom ${colorClass}`
            : `tableElement ${colorClass}`
        }
      >
        <h2>{elContent.symbol}</h2>
        <p className="ElementName">{elContent.name}</p>
        <p className="ElementNumber">{elContent.number}</p>
        <ul className="ElementShells">
          {elContent.shells.map((shell, index) => {
            return <li key={index}>{shell}</li>;
          })}
        </ul>
        <p className="ElementWeight">{elContent.atomic_mass}</p>
      </div>
    </Link>
  );
};

export default SingleElement;
