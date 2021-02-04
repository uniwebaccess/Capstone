import axios from "axios";
import database from "../components/Firebase/firebase";

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
    try {
      console.log("url", url);
      const res = await axios.post("/api/test", { url: url, urlKey: urlKey });
      console.log(res.data);
      dispatch(ranData(res.data, url));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchData = (urlKey) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/test/${urlKey}`);
      dispatch(fetchedData(res.data.data, res.data.url));
    } catch (err) {
      console.error(err);
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
