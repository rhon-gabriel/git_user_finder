import { GET_USERS_START } from "./constants";

export function getUsers(params) {
  return {
    type: GET_USERS_START,
    payload: params,
  };
}
