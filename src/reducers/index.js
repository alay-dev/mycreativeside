import { combineReducers } from "redux";
import post from "./post/postReducers";
import comment from "./comment/commentReducers";
import user from "./user/userReducers";
import login from "./login/loginReducers";

export default combineReducers({
  post,
  comment,
  user,
  login,
});
