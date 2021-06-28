import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import history from "./history";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Post from "./pages/Post";
// hellodaadd 
import Footer from "./components/Footer";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/post" component={Post} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
