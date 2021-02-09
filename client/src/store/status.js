const STATUS_LOADING = "STATUS_LOADING";
const STATUS_SUCCESS = "STATUS_SUCCESS";
const STATUS_ERROR = "STATUS_ERROR";
const STATUS_CLEAR = "STATUS_CLEAR";

const initialState = null;

export function sendStatusLoading() {
  return {
    type: STATUS_LOADING,
  };
}

export function sendStatusSuccess() {
  return {
    type: STATUS_SUCCESS,
  };
}

export function sendStatusError() {
  return {
    type: STATUS_ERROR,
  };
}

export function clearStatus() {
  return {
    type: STATUS_CLEAR,
  };
}

const status = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_LOADING:
      return "loading";
    case STATUS_SUCCESS:
      return "success";
    case STATUS_ERROR:
      return "error";
    case STATUS_CLEAR:
      return null;
    default:
      return state;
  }
};

export default status;
