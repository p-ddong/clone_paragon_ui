import React from "react";
import "./styles.sass";
import vid1 from "../../assets/vid/Info/I1.webm";
import vid2 from "../../assets/vid/Info/I2.webm";

const Info = () => {
  return (
    <div className="info">
      <div className="info-info">
        <h1>Meet Our Core Fabrics</h1>
        <p>Choose your perfect match</p>
        <button>Learn more</button>
      </div>

      <div className="info-vid">
        <div className="vid">
          <video autoPlay loop muted>
            <source src={vid2} type="video/webm" />
          </video>
          <div>
            <h1>Reluna™</h1>
            <span>Everyday Comfort</span>
            <span>🧘🏼‍♀️</span>
          </div>
        </div>

        <div className="vid">
          <video autoPlay loop muted>
            <source src={vid1} type="video/webm" />
          </video>
          <div>
            <h1>RecStretch™</h1>
            <span>Everyday Performance</span>
            <span>🏋🏻‍♀️</span>
          </div>
        </div>
      </div>
      <button>Learn more</button>
    </div>
  );
};

export default Info;
