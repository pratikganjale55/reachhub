import { PLAYER_REQUEST_PENDING, PLAYER_REQUEST_SUCCESS } from "./actionType";
import apiClient from "../../utils/api";
export const getPlayerAll = () => async (dispatch) => {
  try {
    console.log("calling");
    dispatch({ type: PLAYER_REQUEST_PENDING });

    let res = await apiClient.get("/top-players");
    let data = res.data.data.users;
    dispatch({ type: PLAYER_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RECIPE_REQUEST_FAILURE });
    console.log("error while getting data");
  }
};
