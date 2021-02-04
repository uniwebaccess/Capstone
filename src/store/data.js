import axios from "axios";
import {
  sendStatusLoading,
  sendStatusSuccess,
  sendStatusError,
} from "./status";

const RUN_DATA = "RUN_DATA";
const FETCH_DATA = "FETCH_DATA";

const ranData = (data, url) => {
  return {
    type: RUN_DATA,
    data,
    url,
  };
};

const fetchedData = (data, url) => {
  return {
    type: FETCH_DATA,
    data,
    url,
  };
};

export const runData = (urlKey, url) => {
  return async (dispatch) => {
    dispatch(sendStatusLoading());
    try {
      console.log("url", url);
      const res = await axios.post("/api/test", { url: url, urlKey: urlKey });
      console.log(res.data);
      dispatch(ranData(res.data, url));
      dispatch(sendStatusSuccess());
    } catch (err) {
      console.error(err);
      dispatch(sendStatusError());
    }
  };
};

export const fetchData = (urlKey) => {
  return async (dispatch) => {
    dispatch(sendStatusLoading());
    try {
      const res = await axios.get(`/api/test/${urlKey}`);
      dispatch(fetchedData(res.data.data, res.data.url));
      if (res.data.data) {
        dispatch(sendStatusSuccess());
      } else {
        dispatch(sendStatusError());
      }
    } catch (err) {
      console.error(err);
      dispatch(sendStatusError());
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
      return { ...state, data: action.data, url: action.url };
    default:
      return state;
  }
};

export default data;