import React, { useState, useEffect } from "react";
import { FaStar, FaOctopusDeploy } from "react-icons/fa";

export default function Star() {
  const [isStar, setIsStar] = useState(false);
  const [FavorList, setFavorList] = useState([]);

  useEffect(() => {
    console.log("hello there");
    console.log(isStar);
  }, [isStar]);

  const handleStarClick = () => {
    setIsStar((current) => !current);
    setFavorList(() => isStar);
  };
  return (
    <div className="App" onClick={handleStarClick}>
      {isStar ? <FaOctopusDeploy color="#f26419" /> : <FaStar color="gray" />}
      {FavorList}
    </div>
  );
}
