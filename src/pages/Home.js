import React from "react";
import ContactUs from "../components/ContactUs";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Featured />
      <Posts />
      {/* <Contribution /> */}
      <ContactUs />
    </div>
  );
};

export default Home;
