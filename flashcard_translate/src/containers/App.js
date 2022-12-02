import Nav from "../components/Nav";
import Content from "../components/flashcard/Content";
import Home from "../components/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FavorBasket from "../components/flashcard/FavorBasket";
import Translate from "../components/translate/Translate";
import About from "../components/About";
import Joke from "../components/translate/JokeApi";

const vocabularies = [
  {
    id: "1",
    word: "knotty",
    part_of_speech: "Adjective",
    definition:
      "(of a problem or difficulty) complicated and difficult to solve.",
    example: "It was a very knotty problem.",
  },
  {
    id: "2",
    word: "cantrip",
    part_of_speech: "Noun",
    definition: "a magic spell; trick by sorcery.",
    example:
      "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
  },
  {
    id: "3",
    word: "traverse",
    part_of_speech: "Verb",
    definition: "to pass or move over, along, or through.",
    example: "Stanley traversed the continent from west to east.",
  },
  {
    id: "4",
    word: "peculiar",
    part_of_speech: "Adjective",
    definition: "different to what is normal or expected; strange.",
    example: "He gave her some very peculiar looks.",
  },
];

export default function App() {
  const [myFavor, setMyFavor] = useState([]);

  const handleAddFavor = (favor) => {
    const exist = myFavor.find((x) => x.id === favor.id);
    if (exist) {
      setMyFavor(
        myFavor.map((x) =>
          x.id === favor.id ? { ...exist, num: exist.num + 1 } : x
        )
      );
    } else {
      setMyFavor([...myFavor, { ...favor, num: 1 }]);
    }
  };

  const handleRemoveFavor = (favor) => {
    setMyFavor(myFavor.filter((x) => x.id !== favor.id));
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Flashcard"
          element={
            <div className="row">
              <Content
                handleAddFavor={handleAddFavor}
                vocabularies={vocabularies}
              />
              <FavorBasket
                handleRemoveFavor={handleRemoveFavor}
                myFavor={myFavor}
              />
            </div>
          }
        />
        <Route path="/Translate" element={<Translate />} />
        <Route path="/About" element={<About />} />
        <Route path="/Joke" element={<Joke />} />
      </Routes>
    </>
  );
}
