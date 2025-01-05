import React from "react";
import "./styles.sass";
import Card from "./Card";

import bsimg11 from "../../assets/img/bs-cards/bs-card1-1.webp";
import bsimg12 from "../../assets/img/bs-cards/bs-card1-2.webp";
import bsimg21 from "../../assets/img/bs-cards/bs-card2-1.webp";
import bsimg22 from "../../assets/img/bs-cards/bs-card2-2.webp";
import bsimg31 from "../../assets/img/bs-cards/bs-card3-1.webp";
import bsimg32 from "../../assets/img/bs-cards/bs-card3-2.webp";
import bsimg41 from "../../assets/img/bs-cards/bs-card4-1.webp";
import bsimg42 from "../../assets/img/bs-cards/bs-card4-2.webp";
import sculptseamPlus from "../../assets/img/bs-cards/Sculptseam_Plus.webp";
import sculptseam from "../../assets/img/bs-cards/Sculptseam.webp";

const BestSeller = () => {
  const cardList = [
    {
      img1: bsimg11,
      img2: bsimg12,
      imgLogo: sculptseam,
      rating:1460,
      isRecycle: false,
      tradeMard: "RecStretch™",
      type: "Original Sculptseam® Legging",
    },
    {
      img1: bsimg21,
      img2: bsimg22,
      imgLogo: sculptseam,
      rating:2219,
      isRecycle: false,
      tradeMard: "Reluna™",
      type: "Original Sculptseam® Legging",
    },
    {
      img1: bsimg31,
      img2: bsimg32,
      imgLogo: sculptseamPlus,
      rating:487,
      isRecycle: false,
      tradeMard: "Reluna™",
      type: "Original Sculptseam® Plus Legging",
    },
    {
      img1: bsimg41,
      img2: bsimg42,
      imgLogo: sculptseam,
      rating:170,
      isRecycle: false,
      tradeMard: "Reluna™",
      type: "Original Sculptseam™ Pocket Legging",
    },
  ];
  return (
    <div className="bestseller">
      <h1>Shop Our Best Sellers</h1>
      <div className="card-list">
        {cardList.map((item,index)=> (<Card key={index} card={item}/>))}
      </div>
      <button>Show More</button>
    </div>
  );
};

export default BestSeller;
