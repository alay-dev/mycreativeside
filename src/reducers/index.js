import { combineReducers } from "redux";
import post from "./post/postReducers";
import comment from "./comment/commentReducers";

export default combineReducers({
  post,
  comment,
});
