import {
  PLAYER_REQUEST_FAILURE,
  PLAYER_REQUEST_PENDING,
  PLAYER_REQUEST_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  player: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_REQUEST_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        player: [],
      };
    case PLAYER_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        player: action.payload,
      };
    case PLAYER_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        player: [],
      };

    default:
      return state;
  }
};

export default playerReducer;
