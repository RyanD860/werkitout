import axios from "axios";

// CONSTANTS
const GET_USER = "GET_USER";
const GET_EXERCISES = "GET_EXERCISES";
const GET_WEIGHTS = "GET_WEIGHTS";
const ADD_WEIGHT = "ADD_WEIGHT";
const LOGOUT = "LOGOUT";

//ACTION CREATORS

// Get's user information if signed in
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/user").then(resp => {
      return resp.data;
    })
  };
}

export function getExercises() {
  return {
    type: GET_EXERCISES,
    payload: axios.get("api/exercises").then(resp => {
      return resp.data;
    })
  };
}

export function getWeights(id) {
  return {
    type: GET_WEIGHTS,
    payload: axios.get(`/api/user/weight/${id}`).then(resp => {
      return resp.data;
    })
  };
}

export function addWeight(id, weight) {
  return {
    type: ADD_WEIGHT,
    payload: axios
      .post("/api/user/weight/add", {
        id: id,
        weight: weight
      })
      .then(resp => {
        return resp.data;
      })
  };
}

const initialState = {
  user: {},
  exercises: [],
  weights: [],
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
    case `${GET_EXERCISES}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_EXERCISES}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        exercises: action.payload,
        loggedIn: true
      });

    case `${GET_EXERCISES}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_WEIGHTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_WEIGHTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        weights: action.payload,
        loggedIn: true
      });

    case `${GET_WEIGHTS}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${ADD_WEIGHT}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${ADD_WEIGHT}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        weights: action.payload,
        loggedIn: true
      });

    case `${ADD_WEIGHT}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    default:
      return state;
  }
}
