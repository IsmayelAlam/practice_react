import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import "./AnimalShow.css";

const svgMap = { bird, cat, cow, dog, gator, horse };

export default function AnimalShow({ type }) {
  const [click, setClick] = useState(0);

  const handleChick = () => {
    setClick(click + 1);
  };

  return (
    <div onClick={handleChick} className="animal-show">
      <img src={svgMap[type]} alt="animal" className="animal" />
      <img
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * click + "px" }}
        className="heart"
      />
    </div>
  );
}
