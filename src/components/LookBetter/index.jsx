import React from "react";
import "./styles.scss";
import img1 from "../../assets/img/lb-cards/1.jpg";
import img2 from "../../assets/img/lb-cards/2.jpg";
import img3 from "../../assets/img/lb-cards/3.jpg";
import img4 from "../../assets/img/lb-cards/4.jpg";
import img5 from "../../assets/img/lb-cards/5.jpg";
import img6 from "../../assets/img/lb-cards/6.jpg";
import img7 from "../../assets/img/lb-cards/7.jpg";
import img8 from "../../assets/img/lb-cards/8.jpg";
import LookBetterCard from "./LookBetterCard";

const LookBetter = () => {
  const cards = [
    {
      img: img1,
      type: "img",
    },
    {
      img: img2,
      type: "img",
    },
    {
      img: img3,
      type: "vid",
    },
    {
      img: img4,
      type: "img",
    },
    {
      img: img5,
      type: "none",
    },
    {
      img: img6,
      type: "img",
    },
    {
      img: img7,
      type: "img",
    },
    {
      img: img8,
      type: "img",
    },
  ];
  return (
    <div className="look-better">
      <h1>Looks Better on You</h1>
      <div className="lb-cards-list">
        {cards.map((card) => (
          <LookBetterCard card={card} />
        ))}
      </div>
    </div>
  );
};

export default LookBetter;
