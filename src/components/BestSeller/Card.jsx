import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Card = ({ card }) => {
  return (
    <div className="bestseller-card">
      <div className="img-container">
        <img className="img1" src={card.img1} />
        <img className="img2" src={card.img2} />
        <img className="logo" src={card.imgLogo} />
      </div>
      <div className="rating">
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
        <p>{card.rating}</p>
      </div>
      <p className="trade-mark">{card.tradeMark}</p>
      <p className="type">{card.type}</p>
      <p className="color">Black</p>
      <p className="price">68$ USD</p>
      <button>Choose Size</button>
    </div>
  );
};

export default Card;
