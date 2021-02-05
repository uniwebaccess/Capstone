import axios from "axios";
import {
  sendStatusLoading,
  sendStatusSuccess,
  sendStatusError,
} from "./status";
import { setError } from "./error";

const RUN_DATA = "RUN_DATA";
const FETCH_DATA = "FETCH_DATA";
const SELECT_FIELD = "SELECT_FIELD";

const ranData = (url, data) => {
  return {
    type: RUN_DATA,
    url,
    data,
  };
};

const fetchedData = (url, data, avgData) => {
  return {
    type: FETCH_DATA,
    url,
    data,
    avgData,
  };
};

export const selectField = (field) => {
  return {
    type: SELECT_FIELD,
    field,
  };
};

export const runData = (urlKey, url) => {
  return async (dispatch) => {
    dispatch(sendStatusLoading());
    try {
      const res = await axios.post("/api/scan", { url, urlKey });
      dispatch(ranData(url, res.data));
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
  return async (dispatch) => {
    dispatch(sendStatusLoading());
    try {
      const res = await axios.get(`/api/scan/${urlKey}`);
      dispatch(fetchedData(res.data.url, res.data.data, res.data.avgData));
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
  url: "",
  data: null,
  avgData: null,
  selectedField: null,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case RUN_DATA:
      return { ...state, url: action.url, data: action.data };
    case FETCH_DATA:
      return {
        ...state,
        url: action.url,
        data: action.data,
        avgData: action.avgData,
      };
    case SELECT_FIELD:
      // return { ...state, selectedField: action.field };

      //Currently hard-coded for testing
      return { ...state, selectedField: "images" };
    default:
      return state;
  }
};

export default data;
