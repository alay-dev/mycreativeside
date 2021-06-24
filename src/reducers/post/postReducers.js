import { SET_ALL_POST } from "../../constants/posts/postsConst";

const initial_state = {
  all_post: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_POST:
      return (state = { ...state, all_post: action.payload });
    default:
      return state;
  }
}
