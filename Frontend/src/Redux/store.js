import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import playerReducer from "./PlayersReducer/reducer";
import { thunk } from "redux-thunk";
import ratingReducer from "./RatingReducer/reducer";
import authReducer from "./AuthReducer/reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  playerReducer: playerReducer,
  ratingReducer: ratingReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
