import React, { useEffect,useState } from "react";
import Slider from "react-slick";
import "./styles.sass";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/img/carcoursel1.webp";
import img2 from "../../assets/img/carcoursel2.webp";
import img3 from "../../assets/img/carcoursel3.webp";
import img4 from "../../assets/img/carcoursel4.webp";

import img5 from "../../assets/img/carcoursel5.webp";
import img6 from "../../assets/img/carcoursel6.webp";
import img7 from "../../assets/img/carcoursel7.webp";
import img8 from "../../assets/img/carcoursel8.webp";

import velocity from "../../assets/img/Velocity.avif";

const SliderCus = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  };

  useEffect(() => {
      const handleResize = () => {
          setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  return (
    <div className="carousel">
      <div className="velocity">
      <img src={velocity} alt=""/>
      <button>Shop Now</button>
      </div>
    
      <Slider {...settings} className="slider">
        <div>
          <img src={screenWidth > 1024? img1:img5} alt="Hình ảnh carousel 1" />
        </div>
        <div>
          <img src={screenWidth > 1024? img2:img6} alt="Hình ảnh carousel 2" />
        </div>
        <div>
          <img src={screenWidth > 1024? img3:img7} alt="Hình ảnh carousel 3" />
        </div>
        <div>
          <img src={screenWidth > 1024? img4:img8} alt="Hình ảnh carousel 4" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCus;
