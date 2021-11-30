import { takeLatest, put, call } from "redux-saga/effects";
import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
  } from "./constants";
import {
  getUsers,
} from "../../../helpers/api/users";
import { message } from "antd";

export function* getUsersSaga(action) {
  try {
    const res = yield call(getUsers, action.payload);
    yield put({
      type: GET_USERS_SUCCESS,
      results: res.data
    });
  } catch (error) {
    yield put({
      type: GET_USERS_FAILURE,
      error,
    });
    message.error("Something went wrong");
  }
}

export default function* usersSaga() {
  yield takeLatest(GET_USERS_START, getUsersSaga);
}
