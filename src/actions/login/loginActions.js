import {
  LOGIN,
  RELOAD_LOGIN,
  LOGOUT,
  SET_USER_CONFIRM_PASSWORD,
  SET_USER_PASSWORD,
  SET_USER_CONTACT_NUM,
  SET_USER_OLD_IMG,
  SET_USER_IMG,
  SET_USER_EMAIL,
  SET_USER_NAME,
  SET_USER_CURRENT_PASSWORD,
  RESET_USER,
} from "../../constants/login/loginConst";
import UNIVERSAL from "../../config/config";
import firebase from "firebase";
import history from "../../history";

export function signup(user) {
  return (dispatch) => {
    // dispatch(setLoader());
    if (user.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + user.name + ".png")
        .put(user.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log(downloadURL);
            dispatch(signup_api(user, downloadURL));
          });
        }
      );
    } else {
      dispatch(signup_api(user, ""));
    }
  };
}

export function signup_api(user, url) {
  return (dispatch) => {
    // dispatch(setLoader());
    console.log(UNIVERSAL, "Baseurl...");
    return fetch(UNIVERSAL.BASEURL + "/api/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        contact_no: user.contact_num,
        password: user.password,
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_login(responseJson.data));
          dispatch(reset_user());
          history.push("/");
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

export function update_user(user, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    if (user.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + user.name + ".png")
        .put(user.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log(downloadURL);
            dispatch(update_user_api(user, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(update_user_api(user, login, ""));
    }
  };
}

export function update_user_api(user, login, url) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "/api/users", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        contact_no: user.contact_num,
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          // dispatch(get_all_posts(responseJson.result));
          dispatch(reset_user());
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

export function update_password(id, user, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "/api/users/update_password", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        current_password: user.current_password,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          // dispatch(get_all_posts(responseJson.result));
          dispatch(reset_user());
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

export function delete_user(id, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "/api/users", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          // dispatch(get_all_posts(responseJson.result));
          dispatch(reset_user());
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

export function do_login(user) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_login(responseJson.data));
          dispatch(reset_user());
          history.push("/");
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

export function set_login(payload) {
  localStorage.setItem("mycreativeside_token", payload.token);
  localStorage.setItem("mycreativeside_login", JSON.stringify(payload.user));
  return {
    type: LOGIN,
    payload: payload.user,
  };
}

export function set_reload_login(payload) {
  console.log(payload);
  return {
    type: RELOAD_LOGIN,
    payload: payload,
  };
}

export function logout() {
  localStorage.removeItem("mycreativeside_token");
  localStorage.removeItem("mycreativeside_login");
  return {
    type: LOGOUT,
  };
}

export function set_user_name(payload) {
  return {
    type: SET_USER_NAME,
    payload: payload,
  };
}

export function set_user_email(payload) {
  return {
    type: SET_USER_EMAIL,
    payload: payload,
  };
}

export function set_user_img(payload) {
  return {
    type: SET_USER_IMG,
    payload: payload,
  };
}

export function set_user_old_img(payload) {
  return {
    type: SET_USER_OLD_IMG,
    payload: payload,
  };
}

export function set_user_contact_num(payload) {
  return {
    type: SET_USER_CONTACT_NUM,
    payload: payload,
  };
}
export function set_user_current_password(payload) {
  return {
    type: SET_USER_CURRENT_PASSWORD,
    payload: payload,
  };
}

export function set_user_password(payload) {
  return {
    type: SET_USER_PASSWORD,
    payload: payload,
  };
}

export function set_user_confirm_password(payload) {
  return {
    type: SET_USER_CONFIRM_PASSWORD,
    payload: payload,
  };
}

export function reset_user() {
  return {
    type: RESET_USER,
  };
}
