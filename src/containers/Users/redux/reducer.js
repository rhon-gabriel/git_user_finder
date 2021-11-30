import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./constants";

const initialState = {
  results: null,
  sumFollowers: false,
  loading: false,
  error: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
        error: false,
        sumFollowers: action.payload.followers ? true : false
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        results: action.results,
        loading: false,
        error: false,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
