import { Route, Router, Switch } from "react-router-dom";
import "./App.css";

import history from "./history";
import LoginCont from "./containers/login/loginCont";
import DashboardCont from "./containers/dashboard/dashboardCont";
import HeaderCont from "./containers/header/headerCont";
import HomeCont from "./containers/home/homeCont";
import SignupCont from "./containers/signup/signupCont";
import PostCont from "./containers/post/postCont";

import Footer from "./components/Footer";
import { Component } from "react";
import firebase from "firebase";
import firebaseConfig from "./config/firebaseConfig";
import MeCont from "./containers/me/meCont";
import Aos from "aos";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    Aos.init();
  }
  render() {
    return (
      <Router history={history}>
        <HeaderCont />
        <Switch>
          <Route exact path="/" component={HomeCont} />
          <Route exact path="/login" component={LoginCont} />
          <Route exact path="/dashboard" component={DashboardCont} />
          <Route exact path="/signup" component={SignupCont} />
          <Route exact path="/post/:id" component={PostCont} />
          <Route exact path="/me" component={MeCont} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
