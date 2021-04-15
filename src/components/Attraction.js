import React from "react";

const Attraction = (props) => {
  return (
    <article className="attraction">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </article>
  );
};

export default Attraction;
