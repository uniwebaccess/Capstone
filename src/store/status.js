const STATUS_LOADING = "STATUS_LOADING";
const STATUS_SUCCESS = "STATUS_SUCCESS";
const STATUS_ERROR = "STATUS_ERROR";

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

const status = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_LOADING:
      return "loading";
    case STATUS_SUCCESS:
      return "success";
    case STATUS_ERROR:
      return "error";
    default:
      return state;
  }
};

export default status;
