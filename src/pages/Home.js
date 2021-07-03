import React from "react";
import { Component } from "react";
import ContactUs from "../components/ContactUs";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import LoaderCont from "../containers/loader/loaderCont";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.get_all_posts();
  }
  render() {
    const { login } = this.props;
    return (
      <div className="home">
        <Hero />
        <Featured />
        <Posts {...this.props} />
        {/* <Contribution /> */}
        <ContactUs />
        {/* <LoaderCont /> */}
      </div>
    );
  }
}

export default Home;
