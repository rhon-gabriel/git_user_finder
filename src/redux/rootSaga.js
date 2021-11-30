import { all } from "redux-saga/effects";
import usersSaga from "../containers/Users/redux/saga";

export default function* rootSaga() {
  yield all([usersSaga()]);
}
