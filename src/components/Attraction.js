import React from "react";
import "./Attraction.sass";

const Attraction = (props) => {
  return (
    <article className="attraction">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </article>
  );
};

export default Attraction;
