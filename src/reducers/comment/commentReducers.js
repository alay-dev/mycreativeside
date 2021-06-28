import {
  SET_COMMENT,
  SET_COMMENT_USER_ID,
  SET_ALL_COMMENT,
  RESET_COMMENT,
} from "../../constants/comments/commentConst";

const initial_state = {
  all_comment: [],
  user_id: "",
  comment: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.payload) {
    case SET_ALL_COMMENT:
      return (state = { ...state, all_comment: action.payload });
    case SET_COMMENT:
      return (state = { ...state, comment: action.payload });
    case SET_COMMENT_USER_ID:
      return (state = { ...state, user_id: action.payload });
    case RESET_COMMENT:
      return (state = {
        ...state,
        user_id: "",
        comment: "",
      });
    default:
      return state;
  }
}
