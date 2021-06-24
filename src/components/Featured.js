import React from "react";
import featured1 from "../img/featured1.jpeg";
import featured2 from "../img/featured2.jpeg";
import featured3 from "../img/featured3.jpeg";

import "../css/featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <img src={featured1} alt="featured post" />
      <img src={featured2} alt="featured post" />
      <img src={featured3} alt="featured post" />
    </div>
  );
};

export default Featured;
