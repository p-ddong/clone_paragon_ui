import React from "react";
import Slider from "react-slick";
import black from "../../assets/img/color-cards/black.webp";
import everglades from "../../assets/img/color-cards/everglades.webp";
import ink from "../../assets/img/color-cards/ink.webp";
import mystique from "../../assets/img/color-cards/mystique.webp";
import slate from "../../assets/img/color-cards/slate.webp";
import walnut from "../../assets/img/color-cards/walnut.webp";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Color = () => {
  const cards = [
    { img: black, color: "Black" },
    { img: everglades, color: "Everglades" },
    { img: ink, color: "Ink" },
    { img: mystique, color: "Mystique" },
    { img: slate, color: "Slate" },
    { img: walnut, color: "Walnut" },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  return (
    <div className="colors">
      <div>
        <p>Shop by Color</p>
        <div>
          {" "}
          <button>
            <FaArrowLeft />
          </button>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Color;
