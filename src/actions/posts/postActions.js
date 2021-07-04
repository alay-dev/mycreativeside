import {
  SET_ALL_POST,
  SET_POST_TAGS,
  SET_POST_CAPTION,
  SET_CURRENT_POST,
  SET_POST_IMG,
  SET_POST_OLD_IMG,
  SET_POST_AUTHOR_EMAIL,
  SET_POST_AUTHOR_IMG,
  SET_POST_AUTHOR_NAME,
  SET_POST_AUTHOR_ID,
} from "../../constants/posts/postsConst";
import UNIVERSAL from "../../config/config";
import firebase from "firebase";

export function get_all_posts(login) {
  return (dispatch) => {
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_all_posts(responseJson.posts));
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
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/posts/get_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
        // post_id: id,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_current_post(responseJson.posts));
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
    // dispatch(setLoader());
    if (post.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + Date.now() + ".png")
        .put(post.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log(downloadURL);
            dispatch(add_post_api(post, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(add_post_api(post, login, ""));
    }
  };
}

export function add_post_api(post, login, url) {
  return (dispatch) => {
    console.log(login);
    // dispatch(setLoader());
    console.log(UNIVERSAL, "Baseurl...");
    return fetch(UNIVERSAL.BASEURL + "/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: login.email,
        date: Date.now(),
        url: url,
        caption: post.caption,
        tags: post.tags,
        author_name: login.name,
        author_img: login.url,
        author_id: login._id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_posts());
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
    // dispatch(setLoader());
    if (post.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + login.name + ".png")
        .put(post.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            dispatch(update_post_api(id, post, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(update_post_api(id, post, login, post.old_img));
    }
  };
}

export function update_post_api(id, post, login, url) {
  return (dispatch) => {
    // dispatch(setLoader());
    console.log("update action", post);
    return fetch(UNIVERSAL.BASEURL + "/api/posts/", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        email: post.author_email,
        url: url,
        caption: post.caption,
        tags: post.tags,
        author_name: post.author_name,
        author_img: post.author_img,
        author_id: post.author_id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_posts());
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
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/posts", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_posts(login));
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

export function set_post_author(id, post, login) {
  return (dispatch) => {
    console.log("kkkk");
    return fetch(UNIVERSAL.BASEURL + "/api/users/get_user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_post_author_id(id));
          dispatch(set_post_author_name(responseJson.user.name));
          dispatch(set_post_author_email(responseJson.user.email));
          dispatch(set_post_author_img(responseJson.user.url));
          // dispatch(update_post(post_id, post, login));
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

export function set_post_author_id(payload) {
  return {
    type: SET_POST_AUTHOR_ID,
    payload: payload,
  };
}

export function set_post_author_name(payload) {
  return {
    type: SET_POST_AUTHOR_NAME,
    payload: payload,
  };
}

export function set_post_author_email(payload) {
  return {
    type: SET_POST_AUTHOR_EMAIL,
    payload: payload,
  };
}

export function set_post_author_img(payload) {
  console.log("1hh", payload);
  return {
    type: SET_POST_AUTHOR_IMG,
    payload: payload,
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
