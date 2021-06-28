import {
  SET_ALL_POST,
  SET_CURRENT_POST,
  SET_POST_CAPTION,
  SET_POST_IMG,
  SET_POST_TAGS,
  SET_POST_OLD_IMG,
  RESET_POST,
} from "../../constants/posts/postsConst";

const initial_state = {
  all_post: [],
  current_post: "",
  tags: [],
  img: "",
  old_img: "",
  caption: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_POST:
      return (state = { ...state, all_post: action.payload });
    case SET_CURRENT_POST:
      return (state = { ...state, current_post: action.payload });
    case SET_POST_IMG:
      return (state = { ...state, img: action.payload });
    case SET_POST_OLD_IMG:
      return (state = { ...state, old_img: action.payload });
    case SET_POST_CAPTION:
      return (state = { ...state, caption: action.payload });
    case SET_POST_TAGS:
      return (state = { ...state, tags: action.payload });
    case RESET_POST:
      return (state = {
        ...state,
        current_post: "",
        tags: [],
        img: "",
        old_img: "",
        caption: "",
      });
    default:
      return state;
  }
}
