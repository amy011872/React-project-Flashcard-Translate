import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaStar, FaOctopusDeploy } from "react-icons/fa";

export default function Card({ vocab, handleAddFavor }) {
  const [isStar, setIsStar] = useState(false);

  const handleStarClick = () => {
    setIsStar((current) => !current);
  };

  return (
    <>
      <div className="App" onClick={handleStarClick}>
        {isStar ? <FaOctopusDeploy color="#f26419" /> : <FaStar color="gray" />}
        <button className="btn btn-favor" onClick={() => handleAddFavor(vocab)}>
          Add to my favor
        </button>
      </div>
      <div className="vocabulary">
        <h2 className="word">{vocab.word}</h2>
        <h4 className="pos">{vocab.part_of_speech}</h4>
        <h3 className="definition">{vocab.definition}</h3>
      </div>
    </>
  );
}
Card.propTypes = {
  vocab: PropTypes.object.isRequired,
  handleAddFavor: PropTypes.func,
};
