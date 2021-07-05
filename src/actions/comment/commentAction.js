import {
  SET_COMMENT_USER_NAME,
  SET_COMMENT,
  SET_ALL_COMMENT,
  SET_COMMENT_USER_IMG,
  RESET_COMMENT,
} from "../../constants/comments/commentConst";
import UNIVERSAL from "../../config/config";
import { get_post_by_id } from "../posts/postActions";

export function get_all_comment(login) {
  return (dispatch) => {
    //   dispatch(setLoader())
    return fetch(UNIVERSAL.BASEURL + " get_all_comment", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(set_all_comment(responseJson.result));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(responseJson.status, responseJson.message) ;
          }
        }
        // dispatch(unsetLoader()) ;
      });
  };
}

export function add_comment(id, comment, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "/api/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
        date: Date.now(),
        comment: comment.comment,
        user_img: comment.user_img,
        user_name: comment.user_name,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(reset_comment());
          dispatch(get_post_by_id(id));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout())
          } else {
            // dispatch(responseJson.status, responseJson.message);
          }
        }
        // dispatch(unsetLoader()) ;
      });
  };
}

export function update_comment(id, comment, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "update_comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
      body: JSON.stringify({
        post_id: id,
        comment: comment,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(get_all_comment());
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout())
          } else {
            // dispatch(responseJson.status, responseJson.message);
          }
        }
        // dispatch(unsetLoader()) ;
      });
  };
}

export function delete_comment(id, login) {
  return (dispatch) => {
    //   dispatch(setLoader()) ;
    return fetch(UNIVERSAL.BASEURL + "delete_comment", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
        comment_id: id,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.result) {
          dispatch(get_all_comment);
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message));
          }
        }
        // dispatch(unsetLoader()) ;
      });
  };
}

export function set_comment(payload) {
  return {
    type: SET_COMMENT,
    payload: payload,
  };
}

export function set_comment_user_name(payload) {
  return {
    type: SET_COMMENT_USER_NAME,
    payload: payload,
  };
}
export function set_comment_user_img(payload) {
  console.log(payload);
  return {
    type: SET_COMMENT_USER_IMG,
    payload: payload,
  };
}

export function reset_comment() {
  return {
    type: RESET_COMMENT,
  };
}

export function set_all_comment(payload) {
  return {
    type: SET_ALL_COMMENT,
    payload: payload,
  };
}
