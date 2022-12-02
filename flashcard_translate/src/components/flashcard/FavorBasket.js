import React from "react";
import PropTypes from "prop-types";

export default function FavorBasket({ myFavor, handleRemoveFavor }) {
  return (
    <aside className="block col-1 favor-page">
      <h2>My Favorite Words</h2>
      <div>
        {myFavor.length === 0 && (
          <div>The list is empty. Add some favorite words!</div>
        )}
      </div>
      {myFavor.map((favor, i) => (
        <div key={i} className="row">
          <div className="col-2">{favor.word}</div>
          <button
            onClick={() => handleRemoveFavor(favor)}
            className="btn-remove"
          >
            -
          </button>
        </div>
      ))}
    </aside>
  );
}
FavorBasket.propTypes = {
  myFavor: PropTypes.array.isRequired,
  handleRemoveFavor: PropTypes.func,
};
