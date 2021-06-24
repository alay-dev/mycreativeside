import { SET_ALL_POST } from "../../constants/posts/postsConst";
import UNIVERSAL from "../../config/config";
import { response } from "express";

export function get_all_posts(token) {
  return (dispatch) => {
    dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "view_all_post", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((reponse) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          // dispatch(set_all_posts(responseJson.result))
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function set_all_posts(payload) {
  return {
    type: SET_ALL_POST,
    payload: payload,
  };
}
