import {
  SET_ALL_POST,
  SET_POST_TAGS,
  SET_POST_CAPTION,
  SET_CURRENT_POST,
  SET_POST_IMG,
  SET_POST_OLD_IMG,
} from "../../constants/posts/postsConst";
import UNIVERSAL from "../../config/config";
import { response } from "express";

export function get_all_posts(login) {
  return (dispatch) => {
    dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "view_all_post", {
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

export function get_post_by_id(id, login) {
  return (dispatch) => {
    dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "view_all_post", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
        post_id: id,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(set_current_post(responseJson.result));
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

export function add_post(post, login) {
  return (dispatch) => {
    dispatch(setLoader());
    if (post.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + login.name + ".png")
        .put(admin.profile);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            dispatch(add_post_api(post, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(add_admin_api(post, login, ""));
    }
  };
}

export function add_post_api(post, login, url) {
  return (dispatch) => {
    dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "view_all_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        post_img: url,
        post_caption: post.caption,
        post_tags: post.tags,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(set_all_post(responseJson.result));
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

export function update_post(id, post, login) {
  return (dispatch) => {
    dispatch(setLoader());
    if (post.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + login.name + ".png")
        .put(admin.profile);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            dispatch(update_post_api(id, post, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(update_admin_api(id, post, login, old_img));
    }
  };
}

export function update_post_api(id, post, login, url) {
  return (dispatch) => {
    dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "view_all_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        post_id: id,
        post_img: url,
        post_caption: post.caption,
        post_tags: post.tags,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(set_all_post(responseJson.result));
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

export function delete_post(id, login) {
  return (dispatch) => {
    dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "view_all_post", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
        post_id: id,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(set_all_post(responseJson.result));
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

export function set_current_post(payload) {
  return {
    type: SET_CURRENT_POST,
    payload: payload,
  };
}

export function set_post_caption(payload) {
  return {
    type: SET_POST_CAPTION,
    payload: payload,
  };
}

export function set_post_img(payload) {
  return {
    type: SET_POST_IMG,
    payload: payload,
  };
}

export function set_post_old_img(payload) {
  return {
    type: SET_POST_OLD_IMG,
    payload: payload,
  };
}

export function set_post_tags(payload) {
  return {
    type: SET_POST_TAGS,
    payload: payload,
  };
}
