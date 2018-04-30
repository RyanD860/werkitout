import axios from "axios";

// CONSTANTS
const GET_USER = "GET_USER";

//ACTION CREATORS

// Get's user information if signed in
export function getUser() {
  console.log("check fired");
  return {
    type: GET_USER,
    payload: axios.get("/api/user").then(resp => {
      console.log(resp.data);
      return resp.data;
    })
  };
}

const initialState = {
  user: {},
  isLoading: false,
  didErr: false,
  loggedIn: false
};

//REDUCER

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_USER}_FULFILLED`:
      if (action.payload.hasOwnProperty("message")) {
        console.log(action.payload);
      } else {
        return Object.assign({}, state, {
          isLoading: false,
          user: action.payload[0],
          loggedIn: true
        });
      }
    case `${GET_USER}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    default:
      return state;
  }
}
