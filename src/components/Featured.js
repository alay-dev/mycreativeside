import React from "react";
import featured1 from "../img/featured1.jpeg";
import featured2 from "../img/featured2.jpeg";
import featured3 from "../img/featured3.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <img
        data-aos="flip-down"
        data-aos-delay="300"
        src={featured1}
        alt="featured post"
      />
      <img
        data-aos="flip-down"
        data-aos-delay="400"
        src={featured2}
        alt="featured post"
      />
      <img
        data-aos="flip-down"
        data-aos-delay="500"
        src={featured3}
        alt="featured post"
      />
    </div>
  );
};

export default Featured;
