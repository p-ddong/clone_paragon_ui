import React from "react";
import img from "../../assets/icon/lb-icons/imgs.svg";
import vid from "../../assets/icon/lb-icons/video.svg";
import ins from "../../assets/icon/lb-icons/instagram.svg";

const LookBetterCard = ({ card }) => {
  return (
    <div className="lb-card">
      {card.type === "none" ? null : (
        <img
          className="ins-icon"
          src={card.type === "vid" ? vid : img}
          alt="media"
        />
      )}
      <img className="ins" src={ins}/>
      <img src={card.img} />
    </div>
  );
};

export default LookBetterCard;
