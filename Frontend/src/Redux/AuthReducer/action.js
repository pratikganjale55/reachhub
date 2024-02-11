import getApi from "../../utils/api";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const response = await getApi.post("/login", data);
    let messaage = response.data.message;

    dispatch({ type: LOGIN_SUCCESS, payload: messaage });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
    console.log("error whil login");
  }
};
