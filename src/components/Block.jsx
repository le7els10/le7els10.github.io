import React from "react";
import Spill from "./Spill";

const Block = (props) => {
  return (
    <div className={props.break ? "block-container break" : "block-container"}>
      <h2>{props.title}</h2>

      {props.text !== undefined ? <p>{props.text}</p> : null}

      {props.data.map((element, i) => (
        <Spill
          title={element.title}
          description={element.description}
          type={element.type}
          key={i}
        />
      ))}
    </div>
  );
};

export default Block;
