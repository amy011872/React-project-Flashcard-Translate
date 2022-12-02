import React from "react";
import PropTypes from "prop-types";

export default function FavorList({ myFavor }) {
  return (
    <div className="favor-page block">
      <h2>My Favorite Words</h2>
      <div>
        {myFavor.length === 0 && (
          <div>The list is empty. Add some favorite words!</div>
        )}
      </div>
      {myFavor.map((favor, i) => (
        <div key={i} className="row">
          <div className="col-1">{favor.word}</div>
          <div className="col-1">{favor.part_of_speech}</div>
          <div className="col-2">{favor.definition}</div>
          <div className="col-2">{favor.example}</div>
        </div>
      ))}
    </div>
  );
}
FavorList.propTypes = {
  myFavor: PropTypes.arrayOf(
    PropTypes.shape({
      faovr: PropTypes.string,
    })
  ),
};
