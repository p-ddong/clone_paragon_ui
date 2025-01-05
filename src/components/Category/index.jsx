import React from "react";
import "./styles.sass";

import img1 from "../../assets/img/category-cards/Legging.webp";
import img2 from "../../assets/img/category-cards/Short_Sleeve.webp";
import img3 from "../../assets/img/category-cards/Shorts.webp";
import img4 from "../../assets/img/category-cards/Sport_Bra.webp";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const cards = [
    { img: img1, type: "Leggings" },
    { img: img3, type: "Shorts" },
    { img: img4, type: "Sports Bra" },
    { img: img2, type: "Short Sleeve" },
  ];
  return (
    <div className="category">
      <h1>Shop by Category</h1>
      <div className="category-card-list">
        {cards.map((item, index) => (
          <CategoryCard card={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Category;
