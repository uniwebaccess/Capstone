const initialState = null;

const SET_ERROR = "SET_ERROR";

export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    errorMessage,
  };
}

const error = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errorMessage;
    default:
      return state;
  }
};

export default error;
