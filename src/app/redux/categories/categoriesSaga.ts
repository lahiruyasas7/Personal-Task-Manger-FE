import { API } from "@/app/util/axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  getAllCategory,
  getCategoryDataFail,
  getCategoryDataSuccess,
} from "./categoriesSlice";
import { toast } from "react-toastify";

export function* getAllCategorySaga(action: ReturnType<typeof getAllCategory>) {
  try {
    const userId = action.payload;
    const { data } = yield API.get(`category/get-by-userId/${userId}`);

    yield put(getCategoryDataSuccess(data));
  } catch (e: any) {
    toast.error(
      e.response?.data?.message || "Error in retrieving Main Category data"
    );
    yield put(getCategoryDataFail());
  }
}
export function* categorySaga() {
  yield takeLatest(getAllCategory.type, getAllCategorySaga);
}
