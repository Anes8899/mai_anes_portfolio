import React, { useState } from "react";

const CountText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxCharacters = 50;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded
          ? text
          : text.slice(0, maxCharacters) +
            (text.length > maxCharacters ? "..." : "")}
      </p>
      {text.length > maxCharacters && (
        <button onClick={toggleExpansion}>
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default CountText;
