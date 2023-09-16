import React from "react";

const Spill = ({ description, type = null, title }) => {
  const TypeShowing = () => {
    if (type === "email") {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${description}`}
        >
          {description}
        </a>
      );
    } else if (type === "phone") {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`tel:${description}`}
        >
          {description}
        </a>
      );
    } else if (type === "url") {
      return (
        <a target="_blank" rel="noopener noreferrer" href={`${description}`}>
          {description}
        </a>
      );
    } else {
      return <span>{description}</span>;
    }
  };

  return (
    <div className="spill-container" key={title}>
      <h4>{title}</h4>
      <TypeShowing />
    </div>
  );
};

export default Spill;
