import React from "react";
import { Component } from "react";
import ContactUs from "../components/ContactUs";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import { animateScroll as scroll } from "react-scroll";
import LoaderCont from "../containers/loader/loaderCont";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginatedPosts: [],
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    this.scrollToTop();
  }

  render() {
    return (
      <div className="home">
        <Hero />
        <Featured />
        <h3 id="latest_heading" className="latest__heading">
          Recent Posts
        </h3>
        <Posts {...this.props} />
        {/* <Contribution /> */}
        <ContactUs {...this.props} />
        {/* <LoaderCont /> */}
      </div>
    );
  }
}

export default Home;
