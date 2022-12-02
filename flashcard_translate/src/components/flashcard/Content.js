import React from "react";
import Card from "./Card";
import Button from "./Button";
import PropTypes from "prop-types";
import Header from "../Header";

export default function Content({ vocabularies, handleAddFavor }) {
  return (
    <main className="col-2">
      <Header title="FLASHCARD" />
      <div>
        {vocabularies.map((vocab, id) => (
          <div className="Card" key={id}>
            <div>
              <Card vocab={vocab} handleAddFavor={handleAddFavor} />
              <Button examples={vocab.example} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

Content.propTypes = {
  vocabularies: PropTypes.array.isRequired,
  handleAddFavor: PropTypes.func,
};
