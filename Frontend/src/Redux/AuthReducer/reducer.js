import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialstate = {
  isLoading: false,
  isError: false,
  isSuccess: "",
  isAuth : false
  
};
const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: "",
        isAuth : false
       
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: action.payload,
        isAuth : true
       
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: "",
        isAuth : false
       
      };

    default:
      return state;
  }
};
export default authReducer;
