import {
  RATING_REQUEST_FAILURE,
  RATING_REQUEST_PENDING,
  RATING_REQUEST_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  rating: [],
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATING_REQUEST_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        rating: [],
      };
    case RATING_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        rating: action.payload,
      };
    case RATING_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        rating: [],
      };

    default:
      return state;
  }
};

export default ratingReducer;
