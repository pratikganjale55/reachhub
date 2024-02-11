import {
  RATING_REQUEST_FAILURE,
  RATING_REQUEST_PENDING,
  RATING_REQUEST_SUCCESS,
} from "./actionType";
import apiClient from "../../utils/api";
export const getPlayerRating = (userName) => async (dispatch) => {
  try {
    dispatch({ type: RATING_REQUEST_PENDING });

    let res = await apiClient.get(`/player/${userName}/rating-history`);
    let data = res.data.data;
    console.log(data, userName);
    dispatch({ type: RATING_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RATING_REQUEST_FAILURE });
    console.log("error while getting data");
  }
};
