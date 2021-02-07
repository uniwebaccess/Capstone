import axios from "axios";
import {
  sendStatusLoading,
  sendStatusSuccess,
  sendStatusError,
} from "./status";
import { setError } from "./error";

const RUN_DATA = "RUN_DATA";
const FETCH_DATA = "FETCH_DATA";

const ranData = (data, url) => {
  return {
    type: RUN_DATA,
    data,
    url
  };
};

const fetchedData = (data, url, urlKey) => {
  return {
    type: FETCH_DATA,
    data,
    url,
    urlKey
  };
};

export const runData = (urlKey, url) => {
  return async (dispatch) => {
    dispatch(sendStatusLoading());
    try {
      const res = await axios.post("/api/test", { url, urlKey });
      dispatch(ranData(res.data, url, urlKey));
      dispatch(sendStatusSuccess());
    } catch (err) {
      console.log(err);
      console.error(err);
      dispatch(sendStatusError());
      dispatch(setError(err.message));
    }
  };
};

export const fetchData = (urlKey) => {
  return async (dispatch, getState) => {
    let state = getState();
    if (state.data && state.data.urlKey == urlKey) {
      return;
    }

    dispatch(sendStatusLoading());
    try {
      const res = await axios.get(`/api/test/${urlKey}`);
      dispatch(fetchedData(res.data.data, res.data.url, urlKey));
      if (res.data.data) {
        dispatch(sendStatusSuccess());
      } else {
        dispatch(sendStatusError());
        dispatch(setError("Tests not found"));
      }
    } catch (err) {
      console.error(err);
      dispatch(sendStatusError());
      dispatch(setError(err.message));
    }
  };
};

const initialState = {
  data: null,
  url: "",
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case RUN_DATA:
      return { ...state, data: action.data, url: action.url };
    case FETCH_DATA:
      return { ...state, data: action.data, url: action.url, urlKey: action.urlKey };
    default:
      return state;
  }
};

export default data;
