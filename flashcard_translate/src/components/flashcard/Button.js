import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Button({ examples }) {
  const [isShown, setIsShown] = useState(false);

  const handleExampleClick = () => {
    console.log("Click click");
    setIsShown((current) => !current);
  };
  return (
    <div>
      <button type="button" className="btn btn-ex" onClick={handleExampleClick}>
        Show Examples
      </button>
      {isShown && <div id="ex-sent"> {examples}</div>}
    </div>
  );
}
Button.propTypes = {
  examples: PropTypes.string.isRequired,
};
