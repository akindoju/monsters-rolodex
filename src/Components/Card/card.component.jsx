import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container" role="figure">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=190x190`}
      alt="monsters"
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
